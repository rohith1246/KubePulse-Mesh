/**
 * ServiceMeshTopology.js - Production Microservices & Routing Topology
 */

module.exports = [
  { serviceId: 'SVC_001', name: 'orders-gateway-api', namespace: 'ns-production-01', replicas: 8, p99LatencyMs: 12.4, circuitBreaker: 'CLOSED' },
  { serviceId: 'SVC_002', name: 'payments-processing-engine', namespace: 'ns-production-01', replicas: 12, p99LatencyMs: 18.2, circuitBreaker: 'CLOSED' },
  { serviceId: 'SVC_003', name: 'auth-jwt-verifier', namespace: 'ns-security', replicas: 6, p99LatencyMs: 4.1, circuitBreaker: 'CLOSED' },
  { serviceId: 'SVC_004', name: 'inventory-db-cache', namespace: 'ns-production-01', replicas: 4, p99LatencyMs: 2.8, circuitBreaker: 'CLOSED' }
];
