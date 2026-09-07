/**
 * TokenBucketRateLimiter.js - Continuous Fractional Token Replenishment
 */

class TokenBucketRateLimiter {
  constructor(capacity = 100, refillRatePerSec = 20) {
    this.capacity = capacity;
    this.refillRate = refillRatePerSec;
    this.tokens = capacity;
    this.lastRefillTime = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsedSec = (now - this.lastRefillTime) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSec * this.refillRate);
    this.lastRefillTime = now;
  }

  tryConsume(tokensRequired = 1) {
    this.refill();
    if (this.tokens >= tokensRequired) {
      this.tokens -= tokensRequired;
      return { allowed: true, remainingTokens: Number(this.tokens.toFixed(2)) };
    }
    return { allowed: false, remainingTokens: Number(this.tokens.toFixed(2)) };
  }
}

module.exports = TokenBucketRateLimiter;
