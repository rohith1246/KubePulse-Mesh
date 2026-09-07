/**
 * PriorityQueueSchedulerInternalRPCShaper.js
 * Traffic Shaping & Rate Policing Engine: PriorityQueueScheduler applied to InternalRPC.
 */

class PriorityQueueSchedulerInternalRPCShaper {
  constructor(config = {}) {
    this.shaperType = 'PriorityQueueScheduler';
    this.targetResource = 'InternalRPC';
    this.burstCapacity = config.burst || 900;
    this.refillRatePerSec = config.rate || 160;
    this.currentTokens = this.burstCapacity;
    this.lastRefillTimestamp = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsedSec = (now - this.lastRefillTimestamp) / 1000.0;
    this.currentTokens = Math.min(this.burstCapacity, this.currentTokens + elapsedSec * this.refillRatePerSec);
    this.lastRefillTimestamp = now;
  }

  acquireToken(tokensRequested = 1) {
    this.refill();
    if (this.currentTokens >= tokensRequested) {
      this.currentTokens -= tokensRequested;
      return { allowed: true, remainingTokens: Math.floor(this.currentTokens), delayMs: 0 };
    }
    const deficit = tokensRequested - this.currentTokens;
    const requiredWaitMs = Math.ceil((deficit / this.refillRatePerSec) * 1000);
    return { allowed: false, remainingTokens: 0, delayMs: requiredWaitMs };
  }

  getStatus() {
    this.refill();
    return {
      shaper: this.shaperType,
      target: this.targetResource,
      capacity: this.burstCapacity,
      available: Math.floor(this.currentTokens),
      utilizationRatio: +((this.burstCapacity - this.currentTokens) / this.burstCapacity).toFixed(3)
    };
  }
}

module.exports = { PriorityQueueSchedulerInternalRPCShaper };
