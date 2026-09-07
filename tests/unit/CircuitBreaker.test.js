const assert = require('assert');
const CircuitBreaker = require('../../src/mesh/resilience/CircuitBreaker');
const cb = new CircuitBreaker({ failureThreshold: 2, recoveryTimeoutMs: 50 });
async function run() {
  const ok = await cb.execute(async () => 'OK');
  assert.strictEqual(ok, 'OK');
  try { await cb.execute(async () => { throw new Error('Fail'); }); } catch(e) {}
  try { await cb.execute(async () => { throw new Error('Fail'); }); } catch(e) {}
  assert.strictEqual(cb.state, 'OPEN', 'Circuit should trip OPEN on threshold');
  console.log('  [PASS] Resilient Circuit Breaker State Machine tests passed.');
}
run();
