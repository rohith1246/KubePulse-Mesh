/**
 * RequestInterceptor_Filter187.js - Dynamic HTTP/gRPC Request Interceptor & Outlier Detector
 * Filter Index: 187
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class RequestInterceptor_Filter187 {
  constructor() {
    this.filterId = 'FILTER_187';
    this.headerMutations = { 'x-kubepulse-cluster': 'mesh-node-187', 'x-egress-envoy': 'true' };
    this.consecutive5xxErrors = 0;
    this.ejectionThreshold = 5;
  }

  interceptOutbound(request) {
    const headers = { ...(request.headers || {}), ...this.headerMutations };
    return {
      filterId: this.filterId,
      mutatedHeaders: headers,
      forwardTimestamp: Date.now()
    };
  }

  recordResponse(status) {
    if (status >= 500) {
      this.consecutive5xxErrors++;
      if (this.consecutive5xxErrors >= this.ejectionThreshold) {
        return { action: 'EJECT_UPSTREAM_ENDPOINT', filterId: this.filterId };
      }
    } else {
      this.consecutive5xxErrors = 0;
    }
    return { action: 'PASS', filterId: this.filterId };
  }
}

module.exports = RequestInterceptor_Filter187;
