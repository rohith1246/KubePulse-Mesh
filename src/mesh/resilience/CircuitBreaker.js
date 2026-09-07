/**
 * CircuitBreaker.js - Sliding Window Fault Tolerance & Fail-Safe State Machine
 */

class CircuitBreaker {
  constructor(options = {}) {
    this.failureThresholdPct = options.failureThresholdPct || 50;
    this.minimumRequests = options.minimumRequests || 5;
    this.cooldownPeriodMs = options.cooldownPeriodMs || 5000;
    this.halfOpenTrialCount = options.halfOpenTrialCount || 3;

    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.window = [];
    this.lastStateChangeTime = Date.now();
    this.halfOpenSuccesses = 0;
  }

  recordResult(success = true) {
    const now = Date.now();
    this.window.push({ success, time: now });
    // Keep sliding window to last 10 seconds
    this.window = this.window.filter(w => now - w.time < 10000);

    if (this.state === 'HALF_OPEN') {
      if (success) {
        this.halfOpenSuccesses++;
        if (this.halfOpenSuccesses >= this.halfOpenTrialCount) {
          this.transitionTo('CLOSED');
        }
      } else {
        this.transitionTo('OPEN');
      }
      return;
    }

    if (this.state === 'CLOSED' && this.window.length >= this.minimumRequests) {
      const failures = this.window.filter(w => !w.success).length;
      const failureRate = (failures / this.window.length) * 100;
      if (failureRate >= this.failureThresholdPct) {
        this.transitionTo('OPEN');
      }
    }
  }

  canExecute() {
    const now = Date.now();
    if (this.state === 'CLOSED') return true;

    if (this.state === 'OPEN') {
      if (now - this.lastStateChangeTime >= this.cooldownPeriodMs) {
        this.transitionTo('HALF_OPEN');
        return true;
      }
      return false;
    }

    if (this.state === 'HALF_OPEN') {
      return true; // Trial executions permitted
    }

    return false;
  }

  transitionTo(newState) {
    this.state = newState;
    this.lastStateChangeTime = Date.now();
    this.halfOpenSuccesses = 0;
  }
}

module.exports = CircuitBreaker;
