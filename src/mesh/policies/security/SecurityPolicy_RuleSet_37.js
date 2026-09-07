/**
 * SecurityPolicy_RuleSet_37.js - Zero Trust Network Security Policy Engine
 * RuleSet ID: 37
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class SecurityPolicy_RuleSet_37 {
  constructor(allowedRoles = ['admin', 'service-account-37']) {
    this.ruleSetId = 'SEC_POLICY_37';
    this.allowedRoles = new Set(allowedRoles);
    this.rateLimitPerMin = 537;
    this.deniedRequests = 0;
    this.allowedRequests = 0;
  }

  validateAccess(authContext, requestPath) {
    if (!authContext || !authContext.principal) {
      this.deniedRequests++;
      return { allowed: false, status: 401, reason: 'UNAUTHENTICATED' };
    }

    const hasRole = (authContext.roles || []).some(r => this.allowedRoles.has(r));
    if (!hasRole && !this.allowedRoles.has('*')) {
      this.deniedRequests++;
      return { allowed: false, status: 403, reason: 'ROLE_UNAUTHORIZED', requiredRoles: Array.from(this.allowedRoles) };
    }

    this.allowedRequests++;
    return { allowed: true, status: 200, ruleSetId: this.ruleSetId, path: requestPath };
  }

  getSecurityAuditLog() {
    return { ruleSetId: this.ruleSetId, allowed: this.allowedRequests, denied: this.deniedRequests };
  }
}

module.exports = SecurityPolicy_RuleSet_37;
