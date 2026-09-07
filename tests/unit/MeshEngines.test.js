const assert = require('assert');
const W3CTracePropagator = require('../../src/mesh/tracing/W3CTracePropagator');
const CircuitBreaker = require('../../src/mesh/resilience/CircuitBreaker');
const TokenBucketRateLimiter = require('../../src/mesh/ratelimit/TokenBucketRateLimiter');
const PrometheusMetricsRegistry = require('../../src/mesh/metrics/PrometheusMetricsRegistry');
const LoadBalancer = require('../../src/mesh/balancer/LoadBalancer');
const SpanTreeDAG = require('../../src/mesh/tracing/SpanTreeDAG');
const { mTLSAuthenticator, SPIFFEID } = require('../../src/mesh/security/mTLSAuthenticator');
const TrafficSplitter = require('../../src/mesh/routing/TrafficSplitter');
const ServiceGraph = require('../../src/mesh/topology/ServiceGraph');
const FaultInjector = require('../../src/mesh/fault/FaultInjector');
const EnvoyConfigGenerator = require('../../src/mesh/config/EnvoyConfigGenerator');

// 1. W3C Traceparent Header Parse & Creation
const span = W3CTracePropagator.createSpanContext();
assert.ok(span.header.startsWith('00-'));
const parsed = W3CTracePropagator.parseHeader(span.header);
assert.strictEqual(parsed.traceId, span.traceId);
assert.strictEqual(parsed.parentSpanId, span.spanId);

// 2. Circuit Breaker State Transition
const breaker = new CircuitBreaker({ failureThresholdPct: 50, minimumRequests: 4, cooldownPeriodMs: 100 });
breaker.recordResult(true);
breaker.recordResult(false);
breaker.recordResult(false);
breaker.recordResult(false);
assert.strictEqual(breaker.state, 'OPEN');
assert.strictEqual(breaker.canExecute(), false);

// 3. Rate Limiter Token Bucket
const limiter = new TokenBucketRateLimiter(5, 1);
const r1 = limiter.tryConsume(3);
assert.strictEqual(r1.allowed, true);
const r2 = limiter.tryConsume(5);
assert.strictEqual(r2.allowed, false);

// 4. Prometheus Exporter
const prom = new PrometheusMetricsRegistry();
prom.incrementCounter('mesh_request_total', { status: '200', service: 'orders' }, 10);
const metricsText = prom.exportTextFormat();
assert.ok(metricsText.includes('mesh_request_total{status="200",service="orders"} 10'));

// 5. Load Balancer Peak EWMA
const nodes = [
  { id: 'pod-1', ewmaLatencyMs: 12, activeConnections: 2 },
  { id: 'pod-2', ewmaLatencyMs: 45, activeConnections: 8 }
];
const chosen = LoadBalancer.selectPeakEWMA(nodes);
assert.strictEqual(chosen.id, 'pod-1');

// 6. Span Tree DAG Critical Path
const dag = new SpanTreeDAG();
dag.addSpan({ spanId: 'root', parentSpanId: '0000000000000000', durationMs: 5 });
dag.addSpan({ spanId: 'child1', parentSpanId: 'root', durationMs: 15 });
dag.addSpan({ spanId: 'child2', parentSpanId: 'root', durationMs: 8 });
const critical = dag.findCriticalPath('root');
assert.strictEqual(critical.criticalDurationMs, 20); // 5 + 15
assert.strictEqual(critical.path.length, 2);

// 7. mTLS & SPIFFE Authentication
const mtls = new mTLSAuthenticator({ allowedPatterns: ['spiffe://cluster.local/ns/prod/sa/*'] });
const authRes = mtls.authorizeHandshake({
  serial: '1001',
  fingerprint: 'abcd1234sha256',
  spiffeUri: 'spiffe://cluster.local/ns/prod/sa/order-service',
  validFrom: Date.now() - 10000,
  validTo: Date.now() + 100000
});
assert.strictEqual(authRes.authorized, true);

// 8. Traffic Splitter (Canary Routing)
const splitter = new TrafficSplitter([
  { destination: 'v1', weight: 90 },
  { destination: 'v2', weight: 10, headers: { 'x-canary': 'true' } }
]);
const canaryReq = splitter.route({ headers: { 'x-canary': 'true' } });
assert.strictEqual(canaryReq.destination, 'v2');
assert.strictEqual(canaryReq.matchType, 'HEADER_EXACT');

// 9. Service Graph Topology & Blast Radius
const graph = new ServiceGraph();
graph.addDependency('frontend', 'order-api');
graph.addDependency('order-api', 'payment-gateway');
graph.addDependency('order-api', 'inventory-db');
const blast = graph.calculateBlastRadius('payment-gateway');
assert.strictEqual(blast.totalAffectedServices, 3); // payment-gateway, order-api, frontend
assert.strictEqual(graph.detectCycles().length, 0);

// 10. Fault Injector (Chaos Abort)
const faults = new FaultInjector({
  rules: [{ id: 'chaos-1', service: 'payment-gateway', faultType: 'ABORT', percentage: 100, httpStatus: 503 }]
});
faults.evaluateFault({ service: 'payment-gateway' }).then(res => {
  assert.strictEqual(res.faultTriggered, true);
  assert.strictEqual(res.httpStatus, 503);
});

// 11. Envoy Config Generator
const envoyGen = new EnvoyConfigGenerator('node-01', 'prod-mesh');
const listener = envoyGen.generateListener('ingress_80', 80, 'order_cluster');
const cluster = envoyGen.generateCluster('order_cluster', [{ host: '10.0.0.5', port: 8080 }]);
const bootstrap = envoyGen.generateBootstrap([listener], [cluster]);
assert.strictEqual(bootstrap.node.id, 'node-01');
assert.strictEqual(bootstrap.static_resources.listeners.length, 1);
assert.strictEqual(bootstrap.static_resources.clusters.length, 1);

console.log('✅ All 11 KubePulse-Mesh Core Test Suites Passed Successfully!');
