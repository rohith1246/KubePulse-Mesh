/**
 * EnvoyConfigGenerator.js - Dynamic Envoy xDS (LDS, RDS, CDS, EDS) Configuration Synthesizer
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class EnvoyConfigGenerator {
  constructor(nodeId = 'kubepulse-sidecar-01', clusterName = 'kubepulse-mesh') {
    this.nodeId = nodeId;
    this.clusterName = clusterName;
  }

  generateListener(listenerName, port, targetCluster) {
    return {
      name: listenerName,
      address: {
        socket_address: {
          address: '0.0.0.0',
          port_value: port
        }
      },
      filter_chains: [
        {
          filters: [
            {
              name: 'envoy.filters.network.http_connection_manager',
              typed_config: {
                '@type': 'type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager',
                stat_prefix: `${listenerName}_http`,
                route_config: {
                  name: `${listenerName}_route`,
                  virtual_hosts: [
                    {
                      name: `${listenerName}_vhost`,
                      domains: ['*'],
                      routes: [
                        {
                          match: { prefix: '/' },
                          route: { cluster: targetCluster }
                        }
                      ]
                    }
                  ]
                },
                http_filters: [
                  {
                    name: 'envoy.filters.http.router',
                    typed_config: {
                      '@type': 'type.googleapis.com/envoy.extensions.filters.http.router.v3.Router'
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    };
  }

  generateCluster(clusterName, endpoints = [], connectTimeoutMs = 250) {
    return {
      name: clusterName,
      connect_timeout: `${connectTimeoutMs / 1000}s`,
      type: 'STRICT_DNS',
      lb_policy: 'ROUND_ROBIN',
      load_assignment: {
        cluster_name: clusterName,
        endpoints: [
          {
            lb_endpoints: endpoints.map(ep => ({
              endpoint: {
                address: {
                  socket_address: {
                    address: ep.host || '127.0.0.1',
                    port_value: ep.port || 80
                  }
                }
              },
              load_balancing_weight: {
                value: ep.weight || 100
              }
            }))
          }
        ]
      }
    };
  }

  generateBootstrap(listeners = [], clusters = []) {
    return {
      node: {
        id: this.nodeId,
        cluster: this.clusterName
      },
      static_resources: {
        listeners,
        clusters
      },
      admin: {
        access_log_path: '/dev/null',
        address: {
          socket_address: {
            address: '127.0.0.1',
            port_value: 15000
          }
        }
      }
    };
  }
}

module.exports = EnvoyConfigGenerator;
