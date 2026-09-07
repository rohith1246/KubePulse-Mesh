/**
 * ServiceGraph.js - Service Dependency Topology, Cycle Detection & Blast Radius Engine
 * Part of KubePulse-Mesh Service Mesh Infrastructure
 */

class ServiceNode {
  constructor(id, name, type = 'HTTP_SERVICE') {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dependencies = new Set(); // Set of downstream ServiceNode IDs
    this.callers = new Set(); // Set of upstream ServiceNode IDs
    this.metadata = {};
  }
}

class ServiceGraph {
  constructor() {
    this.nodes = new Map(); // id -> ServiceNode
  }

  addService(id, name, type = 'HTTP_SERVICE') {
    if (!this.nodes.has(id)) {
      this.nodes.set(id, new ServiceNode(id, name || id, type));
    }
    return this.nodes.get(id);
  }

  addDependency(sourceId, targetId, rpcProtocol = 'gRPC') {
    const src = this.addService(sourceId);
    const tgt = this.addService(targetId);
    src.dependencies.add(targetId);
    tgt.callers.add(sourceId);
  }

  getDownstreamServices(serviceId) {
    const node = this.nodes.get(serviceId);
    if (!node) return [];
    return Array.from(node.dependencies);
  }

  getUpstreamServices(serviceId) {
    const node = this.nodes.get(serviceId);
    if (!node) return [];
    return Array.from(node.callers);
  }

  detectCycles() {
    const visited = new Set();
    const recStack = new Set();
    const cycles = [];

    const dfs = (nodeId, path) => {
      visited.add(nodeId);
      recStack.add(nodeId);
      path.push(nodeId);

      const node = this.nodes.get(nodeId);
      if (node) {
        for (const neighborId of node.dependencies) {
          if (!visited.has(neighborId)) {
            dfs(neighborId, [...path]);
          } else if (recStack.has(neighborId)) {
            const cycleStart = path.indexOf(neighborId);
            cycles.push([...path.slice(cycleStart), neighborId]);
          }
        }
      }

      recStack.delete(nodeId);
    };

    for (const [nodeId] of this.nodes) {
      if (!visited.has(nodeId)) {
        dfs(nodeId, []);
      }
    }

    return cycles;
  }

  calculateBlastRadius(failedServiceId) {
    const affected = new Set();
    const queue = [failedServiceId];
    affected.add(failedServiceId);

    while (queue.length > 0) {
      const current = queue.shift();
      const node = this.nodes.get(current);
      if (node) {
        for (const callerId of node.callers) {
          if (!affected.has(callerId)) {
            affected.add(callerId);
            queue.push(callerId);
          }
        }
      }
    }

    return {
      failedService: failedServiceId,
      totalAffectedServices: affected.size,
      affectedList: Array.from(affected),
      blastRadiusScore: Number((affected.size / Math.max(1, this.nodes.size)).toFixed(4))
    };
  }

  topologicalSort() {
    const inDegree = new Map();
    for (const [id] of this.nodes) {
      inDegree.set(id, 0);
    }

    for (const [_, node] of this.nodes) {
      for (const depId of node.dependencies) {
        inDegree.set(depId, (inDegree.get(depId) || 0) + 1);
      }
    }

    const queue = [];
    for (const [id, deg] of inDegree) {
      if (deg === 0) queue.push(id);
    }

    const order = [];
    while (queue.length > 0) {
      const u = queue.shift();
      order.push(u);

      const node = this.nodes.get(u);
      if (node) {
        for (const v of node.dependencies) {
          inDegree.set(v, inDegree.get(v) - 1);
          if (inDegree.get(v) === 0) {
            queue.push(v);
          }
        }
      }
    }

    if (order.length !== this.nodes.size) {
      return { sorted: false, reason: 'CYCLE_DETECTED', order: [] };
    }
    return { sorted: true, order };
  }
}

module.exports = ServiceGraph;
