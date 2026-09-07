/**
 * PrometheusMetricsRegistry.js - Standard OpenMetrics / Prometheus Text Exporter
 */

class PrometheusMetricsRegistry {
  constructor() {
    this.counters = new Map();
    this.gauges = new Map();
  }

  incrementCounter(name, labels = {}, value = 1) {
    const key = `${name}{${Object.entries(labels).map(([k, v]) => `${k}="${v}"`).join(',')}}`;
    this.counters.set(key, (this.counters.get(key) || 0) + value);
  }

  setGauge(name, labels = {}, value = 0) {
    const key = `${name}{${Object.entries(labels).map(([k, v]) => `${k}="${v}"`).join(',')}}`;
    this.gauges.set(key, value);
  }

  exportTextFormat() {
    const lines = [
      '# HELP mesh_request_total Total HTTP requests handled by Envoy sidecars',
      '# TYPE mesh_request_total counter'
    ];
    for (const [k, v] of this.counters) {
      lines.push(`${k} ${v}`);
    }

    lines.push(
      '# HELP mesh_service_replicas Active healthy pod replicas in cluster',
      '# TYPE mesh_service_replicas gauge'
    );
    for (const [k, v] of this.gauges) {
      lines.push(`${k} ${v}`);
    }

    return lines.join('\n') + '\n';
  }
}

module.exports = PrometheusMetricsRegistry;
