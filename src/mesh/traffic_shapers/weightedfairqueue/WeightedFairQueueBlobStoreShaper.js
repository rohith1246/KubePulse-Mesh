/**
 * WeightedFairQueueBlobStoreShaper.js
 * Traffic Shaping & Rate Policing Engine: WeightedFairQueue applied to BlobStore.
 */

class WeightedFairQueueBlobStoreShaper {
  constructor(config = {}) {
    this.shaperType = 'WeightedFairQueue';
    this.targetResource = 'BlobStore';
    this.burstCapacity = config.burst || 1250;
    this.refillRatePerSec = config.rate || 180;
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

module.exports = { WeightedFairQueueBlobStoreShaper };
