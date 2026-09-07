/**
 * W3CTracePropagator.js - W3C Distributed TraceContext Header Parser & Injector
 * Spec: https://www.w3.org/TR/trace-context/
 * Format: 00-{trace_id}-{parent_id}-{trace_flags}
 */

class W3CTracePropagator {
  static generateRandomHex(byteCount) {
    const chars = '0123456789abcdef';
    let hex = '';
    for (let i = 0; i < byteCount * 2; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  static createSpanContext(parentContext = null) {
    const traceId = parentContext ? parentContext.traceId : this.generateRandomHex(16);
    const spanId = this.generateRandomHex(8);
    const traceFlags = parentContext ? parentContext.traceFlags : '01'; // 01 = Sampled
    return {
      version: '00',
      traceId,
      spanId,
      traceFlags,
      header: `00-${traceId}-${spanId}-${traceFlags}`
    };
  }

  static parseHeader(traceparentHeader) {
    if (!traceparentHeader || typeof traceparentHeader !== 'string') return null;
    const parts = traceparentHeader.trim().split('-');
    if (parts.length !== 4) return null;

    const [version, traceId, parentSpanId, traceFlags] = parts;
    if (version !== '00' || traceId.length !== 32 || parentSpanId.length !== 16) return null;

    return {
      version,
      traceId,
      parentSpanId,
      traceFlags,
      isSampled: (parseInt(traceFlags, 16) & 0x01) === 1
    };
  }
}

module.exports = W3CTracePropagator;
