/**
 * mTLSAuthenticator.js - Mutual TLS & SPIFFE ID Identity Verification Engine
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

const crypto = require('crypto');

class SPIFFEID {
  constructor(trustDomain, path) {
    this.trustDomain = trustDomain;
    this.path = path;
  }

  toString() {
    return `spiffe://${this.trustDomain}${this.path}`;
  }

  static parse(uri) {
    if (!uri || !uri.startsWith('spiffe://')) {
      throw new Error(`Invalid SPIFFE URI: ${uri}`);
    }
    const clean = uri.slice(9);
    const slashIdx = clean.indexOf('/');
    if (slashIdx === -1) {
      return new SPIFFEID(clean, '/');
    }
    const trustDomain = clean.slice(0, slashIdx);
    const path = clean.slice(slashIdx);
    return new SPIFFEID(trustDomain, path);
  }

  matchesPattern(pattern) {
    const regexStr = '^' + pattern
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')
      .replace(/\*/g, '.*') + '$';
    return new RegExp(regexStr).test(this.toString());
  }
}

class mTLSAuthenticator {
  constructor(options = {}) {
    this.trustDomain = options.trustDomain || 'cluster.local';
    this.caCertificates = new Map(); // certId -> PEM string
    this.revocationList = new Set(); // cert serials / fingerprints
    this.allowedSpiffePatterns = new Set(options.allowedPatterns || ['spiffe://cluster.local/*']);
    this.handshakeLogs = [];
  }

  registerCACertificate(caId, pemCert) {
    const hash = crypto.createHash('sha256').update(pemCert).digest('hex');
    this.caCertificates.set(caId, { pem: pemCert, fingerprint: hash, addedAt: Date.now() });
    return hash;
  }

  revokeCertificate(fingerprintOrSerial) {
    this.revocationList.add(fingerprintOrSerial);
  }

  isRevoked(fingerprintOrSerial) {
    return this.revocationList.has(fingerprintOrSerial);
  }

  authorizeHandshake(clientCertMeta) {
    const { serial, fingerprint, spiffeUri, validFrom, validTo } = clientCertMeta;
    const now = Date.now();

    if (this.isRevoked(fingerprint) || this.isRevoked(serial)) {
      const record = { authorized: false, reason: 'CERTIFICATE_REVOKED', spiffeUri, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    if (validFrom && now < validFrom) {
      const record = { authorized: false, reason: 'CERTIFICATE_NOT_YET_VALID', spiffeUri, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    if (validTo && now > validTo) {
      const record = { authorized: false, reason: 'CERTIFICATE_EXPIRED', spiffeUri, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    if (!spiffeUri) {
      const record = { authorized: false, reason: 'MISSING_SPIFFE_SAN', spiffeUri: null, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    let parsedSpiffe;
    try {
      parsedSpiffe = SPIFFEID.parse(spiffeUri);
    } catch (err) {
      const record = { authorized: false, reason: 'MALFORMED_SPIFFE_URI', spiffeUri, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    let matched = false;
    for (const pattern of this.allowedSpiffePatterns) {
      if (parsedSpiffe.matchesPattern(pattern)) {
        matched = true;
        break;
      }
    }

    if (!matched) {
      const record = { authorized: false, reason: 'SPIFFE_ID_NOT_AUTHORIZED', spiffeUri, timestamp: now };
      this.handshakeLogs.push(record);
      return record;
    }

    const record = {
      authorized: true,
      reason: 'AUTHENTICATED_AND_AUTHORIZED',
      spiffeUri: parsedSpiffe.toString(),
      trustDomain: parsedSpiffe.trustDomain,
      servicePath: parsedSpiffe.path,
      timestamp: now
    };
    this.handshakeLogs.push(record);
    return record;
  }
}

module.exports = { mTLSAuthenticator, SPIFFEID };
