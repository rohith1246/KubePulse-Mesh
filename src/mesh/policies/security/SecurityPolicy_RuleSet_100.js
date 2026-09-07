/**
 * SecurityPolicy_RuleSet_100.js - Zero Trust Network Security Policy Engine
 * RuleSet ID: 100
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class SecurityPolicy_RuleSet_100 {
  constructor(allowedRoles = ['admin', 'service-account-100']) {
    this.ruleSetId = 'SEC_POLICY_100';
    this.allowedRoles = new Set(allowedRoles);
    this.rateLimitPerMin = 600;
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

module.exports = SecurityPolicy_RuleSet_100;
