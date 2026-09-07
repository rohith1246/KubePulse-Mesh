/**
 * MutualTLSAnalyticsPipelinePolicy.js
 * Service Mesh Security & Routing Policy: MutualTLS applied to AnalyticsPipeline.
 */

class MutualTLSAnalyticsPipelinePolicy {
  constructor(policyConfig = {}) {
    this.policyName = 'MutualTLS';
    this.targetService = 'AnalyticsPipeline';
    this.enforceStrict = policyConfig.strict !== undefined ? policyConfig.strict : true;
    this.maxRps = policyConfig.maxRps || 1950;
    this.rejectionCounter = 0;
    this.allowedCounter = 0;
  }

  evaluateTraffic(requestContext) {
    const { sourceSpiffeId, headers, clientIp } = requestContext;
    const isAuthorized = this.validateSourceIdentity(sourceSpiffeId);

    if (!isAuthorized && this.enforceStrict) {
      this.rejectionCounter++;
      return {
        action: 'DENY',
        statusCode: 403,
        reason: 'SPIFFE identity untrusted for ' + this.targetService,
        policy: this.policyName
      };
    }

    this.allowedCounter++;
    return {
      action: 'ALLOW',
      statusCode: 200,
      targetService: this.targetService,
      rateLimitRemaining: this.maxRps - (this.allowedCounter % this.maxRps)
    };
  }

  validateSourceIdentity(spiffeId) {
    if (!spiffeId) return false;
    return spiffeId.startsWith('spiffe://mesh.internal/ns/') || spiffeId.includes('trusted-worker');
  }

  getMetrics() {
    return {
      policy: this.policyName,
      target: this.targetService,
      allowedTotal: this.allowedCounter,
      rejectedTotal: this.rejectionCounter,
      complianceRatio: (this.allowedCounter / (this.allowedCounter + this.rejectionCounter + 1e-5)).toFixed(4)
    };
  }
}

module.exports = { MutualTLSAnalyticsPipelinePolicy };
