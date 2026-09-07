/**
 * AdaptiveLoadBalancer_Route23.js - Adaptive Peak EWMA Weighted Load Balancer
 * Route Index: 23
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class AdaptiveLoadBalancer_Route23 {
  constructor() {
    this.routeId = 'LB_ROUTE_23';
    this.endpoints = [];
  }

  registerEndpoint(id, host, port, initialWeight = 100) {
    this.endpoints.push({ id, host, port, weight: initialWeight, activeRequests: 0, ewmaMs: 15 });
  }

  selectEndpoint() {
    if (this.endpoints.length === 0) return null;
    let best = this.endpoints[0];
    let minCost = Infinity;

    for (const ep of this.endpoints) {
      const cost = ep.ewmaMs * (ep.activeRequests + 1) / (ep.weight || 1);
      if (cost < minCost) {
        minCost = cost;
        best = ep;
      }
    }
    return best;
  }
}

module.exports = AdaptiveLoadBalancer_Route23;
