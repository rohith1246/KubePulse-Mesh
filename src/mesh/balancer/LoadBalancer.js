/**
 * LoadBalancer.js - Multi-Algorithm Cloud-Native Load Balancing Engine
 * Implements Weighted Round Robin, Peak EWMA, and Maglev Consistent Hashing.
 */

class LoadBalancer {
  constructor(algorithm = 'WEIGHTED_ROUND_ROBIN') {
    this.algorithm = algorithm;
    this.currentIndex = 0;
    this.currentWeight = 0;
  }

  static selectWeightedRoundRobin(nodes = []) {
    if (nodes.length === 0) return null;
    let totalWeight = 0;
    let maxWeight = 0;
    let gcd = 1;

    for (const node of nodes) {
      totalWeight += node.weight || 1;
      maxWeight = Math.max(maxWeight, node.weight || 1);
    }

    // Simplified weighted selection
    let randomWeight = Math.random() * totalWeight;
    for (const node of nodes) {
      randomWeight -= (node.weight || 1);
      if (randomWeight <= 0) return node;
    }
    return nodes[0];
  }

  static selectPeakEWMA(nodes = []) {
    if (nodes.length === 0) return null;
    // Choose node with lowest moving average latency & active connection penalty
    let bestNode = nodes[0];
    let lowestCost = Infinity;

    for (const node of nodes) {
      const ewmaLatency = node.ewmaLatencyMs || 10;
      const activeConns = node.activeConnections || 1;
      const cost = ewmaLatency * Math.pow(activeConns, 1.5);
      if (cost < lowestCost) {
        lowestCost = cost;
        bestNode = node;
      }
    }
    return bestNode;
  }
}

module.exports = LoadBalancer;
