class TracePropagator {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  generateTraceId() {
    return Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('');
  }
  generateSpanId() {
    return Array.from({length: 16}, () => Math.floor(Math.random()*16).toString(16)).join('');
  }
  injectTraceContext(headers = {}, traceId = null, parentSpanId = null) {
    const tid = traceId || this.generateTraceId();
    const sid = this.generateSpanId();
    headers['traceparent'] = `00-${tid}-${sid}-01`;
    headers['x-b3-traceid'] = tid;
    headers['x-b3-spanid'] = sid;
    if (parentSpanId) headers['x-b3-parentspanid'] = parentSpanId;
    return { headers, traceId: tid, spanId: sid };
  }
  extractTraceContext(headers = {}) {
    const tp = headers['traceparent'] || '';
    const parts = tp.split('-');
    if (parts.length === 4) {
      return { traceId: parts[1], parentSpanId: parts[2], sampled: parts[3] === '01' };
    }
    return { traceId: this.generateTraceId(), parentSpanId: null, sampled: true };
  }
}
module.exports = TracePropagator;
