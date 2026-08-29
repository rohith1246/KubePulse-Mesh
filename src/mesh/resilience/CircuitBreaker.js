class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.recoveryTimeoutMs = options.recoveryTimeoutMs || 10000;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastStateChange = Date.now();
  }
  async execute(action) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastStateChange > this.recoveryTimeoutMs) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('CircuitBreaker: Request rejected, circuit is OPEN');
      }
    }
    try {
      const result = await action();
      if (this.state === 'HALF_OPEN') {
        this.state = 'CLOSED';
        this.failureCount = 0;
      }
      return result;
    } catch (err) {
      this.failureCount++;
      if (this.failureCount >= this.failureThreshold) {
        this.state = 'OPEN';
        this.lastStateChange = Date.now();
      }
      throw err;
    }
  }
}
module.exports = CircuitBreaker;
