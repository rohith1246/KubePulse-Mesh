/**
 * MeshResolverRateLimitBucket.js
 * Envoy / eBPF Sidecar Telemetry Filter for mesh_resolver -> RateLimitBucket
 */

class MeshResolverRateLimitBucket {
  constructor(filterConfig = {}) {
    this.layerName = 'mesh_resolver';
    this.filterType = 'RateLimitBucket';
    this.enabled = filterConfig.enabled !== undefined ? filterConfig.enabled : true;
    this.sampleRate = filterConfig.sampleRate || 1.0;
    this.metricsRegistry = new Map();
    this.p99ThresholdMs = 190;
  }

  onRequestHeaders(context, headers) {
    if (!this.enabled) return { status: 'CONTINUE' };
    const traceId = headers['x-b3-traceid'] || 'trace-' + Date.now();
    const spanId = 'span-' + Math.floor(Math.random() * 1000000);
    context.set('startTime', Date.now());
    context.set('traceId', traceId);
    context.set('spanId', spanId);

    return {
      status: 'CONTINUE',
      injectedHeaders: {
        'x-b3-traceid': traceId,
        'x-b3-spanid': spanId,
        'x-filter-processed-by': this.filterType
      }
    };
  }

  onResponseBody(context, body) {
    if (!this.enabled) return { status: 'CONTINUE' };
    const start = context.get('startTime') || Date.now();
    const latency = Date.now() - start;

    this.recordLatencyMetric(latency);
    if (latency > this.p99ThresholdMs) {
      this.triggerLatencyAlert(context.get('traceId'), latency);
    }

    return {
      status: 'CONTINUE',
      measuredLatencyMs: latency
    };
  }

  recordLatencyMetric(durationMs) {
    const bucket = Math.floor(durationMs / 10) * 10;
    const current = this.metricsRegistry.get(bucket) || 0;
    this.metricsRegistry.set(bucket, current + 1);
  }

  triggerLatencyAlert(traceId, latency) {
    const alert = {
      event: 'HIGH_LATENCY_BREACH',
      layer: this.layerName,
      filter: this.filterType,
      traceId,
      latencyMs: latency,
      thresholdMs: this.p99ThresholdMs
    };
    return alert;
  }
}

module.exports = { MeshResolverRateLimitBucket };
