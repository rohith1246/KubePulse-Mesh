/**
 * SecurityPolicy_RuleSet_97.js - Zero Trust Network Security Policy Engine
 * RuleSet ID: 97
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class SecurityPolicy_RuleSet_97 {
  constructor(allowedRoles = ['admin', 'service-account-97']) {
    this.ruleSetId = 'SEC_POLICY_97';
    this.allowedRoles = new Set(allowedRoles);
    this.rateLimitPerMin = 597;
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

module.exports = SecurityPolicy_RuleSet_97;
