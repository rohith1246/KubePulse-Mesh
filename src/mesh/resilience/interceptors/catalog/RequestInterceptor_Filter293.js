/**
 * RequestInterceptor_Filter293.js - Dynamic HTTP/gRPC Request Interceptor & Outlier Detector
 * Filter Index: 293
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class RequestInterceptor_Filter293 {
  constructor() {
    this.filterId = 'FILTER_293';
    this.headerMutations = { 'x-kubepulse-cluster': 'mesh-node-293', 'x-egress-envoy': 'true' };
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

module.exports = RequestInterceptor_Filter293;
