/**
 * SpanTreeDAG.js - Trace Span DAG Graph & Critical Path Bottleneck Analyzer
 */

class SpanTreeDAG {
  constructor() {
    this.nodes = new Map(); // spanId -> spanData
    this.children = new Map(); // spanId -> Set(childSpanIds)
    this.roots = new Set();
  }

  addSpan(span) {
    this.nodes.set(span.spanId, span);
    if (!this.children.has(span.spanId)) {
      this.children.set(span.spanId, new Set());
    }

    if (span.parentSpanId && span.parentSpanId !== '0000000000000000') {
      if (!this.children.has(span.parentSpanId)) {
        this.children.set(span.parentSpanId, new Set());
      }
      this.children.get(span.parentSpanId).add(span.spanId);
    } else {
      this.roots.add(span.spanId);
    }
  }

  findCriticalPath(rootSpanId) {
    const span = this.nodes.get(rootSpanId);
    if (!span) return { criticalDurationMs: 0, path: [] };

    const childIds = Array.from(this.children.get(rootSpanId) || []);
    if (childIds.length === 0) {
      return { criticalDurationMs: span.durationMs || 0, path: [span] };
    }

    let maxChildPath = { criticalDurationMs: 0, path: [] };
    for (const cid of childIds) {
      const childRes = this.findCriticalPath(cid);
      if (childRes.criticalDurationMs > maxChildPath.criticalDurationMs) {
        maxChildPath = childRes;
      }
    }

    return {
      criticalDurationMs: (span.durationMs || 0) + maxChildPath.criticalDurationMs,
      path: [span, ...maxChildPath.path]
    };
  }
}

module.exports = SpanTreeDAG;
