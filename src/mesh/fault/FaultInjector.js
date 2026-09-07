/**
 * FaultInjector.js - Chaos Engineering & Network Fault Injection Engine
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class FaultInjector {
  constructor(config = {}) {
    this.rules = new Map(); // ruleId -> FaultRule
    if (config.rules) {
      config.rules.forEach(r => this.addRule(r));
    }
  }

  addRule(rule) {
    const id = rule.id || `fault_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const normalized = {
      id,
      service: rule.service || '*',
      path: rule.path || '*',
      faultType: rule.faultType, // 'DELAY', 'ABORT', 'CORRUPT'
      percentage: Math.min(100, Math.max(0, rule.percentage ?? 100)),
      delayMs: rule.delayMs || 0,
      httpStatus: rule.httpStatus || 500,
      errorMessage: rule.errorMessage || 'Chaos Fault Injected by KubePulse-Mesh',
      enabled: rule.enabled !== false
    };
    this.rules.set(id, normalized);
    return id;
  }

  removeRule(id) {
    return this.rules.delete(id);
  }

  _matches(pattern, value) {
    if (!pattern || pattern === '*') return true;
    if (pattern === value) return true;
    const regexStr = '^' + pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$';
    return new RegExp(regexStr).test(value);
  }

  async evaluateFault(context = {}) {
    const { service = '', path = '' } = context;

    for (const [_, rule] of this.rules) {
      if (!rule.enabled) continue;
      if (!this._matches(rule.service, service)) continue;
      if (!this._matches(rule.path, path)) continue;

      const roll = Math.random() * 100;
      if (roll <= rule.percentage) {
        if (rule.faultType === 'DELAY') {
          if (rule.delayMs > 0) {
            await new Promise(resolve => setTimeout(resolve, rule.delayMs));
          }
          return {
            faultTriggered: true,
            faultType: 'DELAY',
            injectedDelayMs: rule.delayMs,
            proceed: true
          };
        } else if (rule.faultType === 'ABORT') {
          return {
            faultTriggered: true,
            faultType: 'ABORT',
            httpStatus: rule.httpStatus,
            errorMessage: rule.errorMessage,
            proceed: false
          };
        }
      }
    }

    return { faultTriggered: false, proceed: true };
  }
}

module.exports = FaultInjector;
