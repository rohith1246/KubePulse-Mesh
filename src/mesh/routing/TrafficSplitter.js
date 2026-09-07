/**
 * TrafficSplitter.js - Canary & Blue-Green Dynamic Traffic Routing Engine
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

const crypto = require('crypto');

class TrafficSplitter {
  constructor(routes = []) {
    this.routes = routes; // Array of { destination: 'v1'/'v2', weight: 80, headers: {}, cookie: 'user_segment' }
    this._validateAndNormalize();
  }

  setRoutes(routes) {
    this.routes = routes;
    this._validateAndNormalize();
  }

  _validateAndNormalize() {
    const totalWeight = this.routes.reduce((sum, r) => sum + (r.weight || 0), 0);
    if (totalWeight > 0) {
      this.normalizedRoutes = this.routes.map(r => ({
        ...r,
        probability: (r.weight || 0) / totalWeight
      }));
    } else {
      this.normalizedRoutes = [];
    }
  }

  _hashStringToUnitInterval(str) {
    const hash = crypto.createHash('md5').update(str).digest('hex');
    const intVal = parseInt(hash.slice(0, 8), 16);
    return intVal / 0xffffffff;
  }

  route(requestContext = {}) {
    const { headers = {}, cookies = {}, clientIp = '', userId = '' } = requestContext;

    // 1. Exact Header Matching Rule
    for (const route of this.normalizedRoutes) {
      if (route.headers) {
        let allHeadersMatch = true;
        for (const [key, val] of Object.entries(route.headers)) {
          const reqVal = headers[key.toLowerCase()] || headers[key];
          if (reqVal !== val) {
            allHeadersMatch = false;
            break;
          }
        }
        if (allHeadersMatch && Object.keys(route.headers).length > 0) {
          return { destination: route.destination, matchType: 'HEADER_EXACT', route };
        }
      }
    }

    // 2. Sticky Cookie / User ID Session Hashing
    const stickinessKey = userId || cookies['session_id'] || cookies['user_id'] || clientIp;
    let roll = Math.random();
    if (stickinessKey) {
      roll = this._hashStringToUnitInterval(stickinessKey);
    }

    // 3. Cumulative Probability Distribution
    let cumulative = 0;
    for (const route of this.normalizedRoutes) {
      cumulative += route.probability;
      if (roll <= cumulative) {
        return {
          destination: route.destination,
          matchType: stickinessKey ? 'DETERMINISTIC_STICKY' : 'WEIGHTED_CANARY',
          weight: route.weight,
          route
        };
      }
    }

    // Fallback to first available route
    return {
      destination: this.normalizedRoutes[0]?.destination || 'default',
      matchType: 'FALLBACK',
      route: this.normalizedRoutes[0] || null
    };
  }
}

module.exports = TrafficSplitter;
