const assert = require('assert');
const TracePropagator = require('../../src/mesh/tracing/TracePropagator');
const tp = new TracePropagator('orders-service');
const { headers, traceId, spanId } = tp.injectTraceContext({});
assert.ok(headers['traceparent'].startsWith('00-'), 'Should inject valid W3C traceparent');
const ctx = tp.extractTraceContext(headers);
assert.strictEqual(ctx.traceId, traceId, 'Extracted traceId should match injected');
console.log('  [PASS] OpenTelemetry Trace Context Propagation tests passed.');
