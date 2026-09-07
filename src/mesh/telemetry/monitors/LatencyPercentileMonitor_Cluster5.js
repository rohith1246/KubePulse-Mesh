/**
 * LatencyPercentileMonitor_Cluster5.js - Latency Percentile & Histogram Window Monitor
 * Cluster ID: 5
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class LatencyPercentileMonitor_Cluster5 {
  constructor(windowSize = 1000) {
    this.clusterId = 'CLUSTER_TEL_5';
    this.windowSize = windowSize;
    this.latencies = [];
  }

  recordLatency(durationMs) {
    this.latencies.push(durationMs);
    if (this.latencies.length > this.windowSize) {
      this.latencies.shift();
    }
  }

  calculatePercentiles() {
    if (this.latencies.length === 0) return { p50: 0, p90: 0, p99: 0, count: 0 };
    const sorted = [...this.latencies].sort((a, b) => a - b);
    const p50 = sorted[Math.floor(sorted.length * 0.50)];
    const p90 = sorted[Math.floor(sorted.length * 0.90)];
    const p99 = sorted[Math.floor(sorted.length * 0.99)];

    return {
      clusterId: this.clusterId,
      sampleCount: sorted.length,
      p50: Number(p50.toFixed(2)),
      p90: Number(p90.toFixed(2)),
      p99: Number(p99.toFixed(2)),
      slaBreached: p99 > 200
    };
  }
}

module.exports = LatencyPercentileMonitor_Cluster5;
