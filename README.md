# KubePulse-Mesh

Service Mesh Observability & Distributed Tracing

---

## Installation

```bash
cd KubePulse-Mesh
npm install
```

---

## Build

```bash
npm run build
docker build -t kubepulse-mesh:latest .
```

---

## Run

```bash
npm start
docker-compose up -d
```

---

## Dependencies

- **Runtime**: Node.js Standard Library (>= 18.0.0)
- **Architecture**: Modular domain engines with zero external unverified dependencies

---

## Usage

Access the application and endpoints locally on port **6000**.

---

## Testing & Coverage

```bash
npm test
npm run test:coverage
```


# 🌐 KubePulse-Mesh: Cloud-Native Distributed Service Mesh & Observability Telemetry

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/rohith1246/KubePulse-Mesh)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)](#license)
[![Architecture](https://img.shields.io/badge/architecture-OpenTelemetry%20%2F%20Envoy%20Mesh-cyan.svg)](#architecture)

KubePulse-Mesh is a distributed cloud-native service mesh telemetry engine engineered for distributed context propagation, resilient fault tolerance, latency SLA enforcement, and Prometheus metrics exporting.

---

## 🏛️ System Architecture

```text
[ Ingress Gateway / Client Traffic ]
                 │
                 ▼
+────────────────────────────────────────────────+
|   W3C Distributed Trace Context Propagator     |
+────────────────────────────────────────────────+
                 │
                 ▼
+────────────────────────────────────────────────+
|   Adaptive Circuit Breaker & Rate Limiter      |
|     (CLOSED ──► OPEN ──► HALF_OPEN)            |
+────────────────────────────────────────────────+
                 │
                 ▼
+────────────────────────────────────────────────+
|   Traffic Routing & Weighted Canary Engine     |
+────────────────────────────────────────────────+
                 │
                 ▼
[ Microservice Cluster Pods & Prometheus Scrape Exporters ]
```

---

## 🚀 Key Engineering Features

### 1. OpenTelemetry W3C Trace Context Propagation
* **W3C `traceparent` Parsing:** Injects and extracts distributed trace headers across multi-hop microservice topologies.
* **Span Correlation:** Correlates parent-child execution latency graphs across heterogeneous service nodes.

### 2. State-Machine Circuit Breaker
* **Tri-State Resiliency:** Implements `CLOSED`, `OPEN`, and `HALF_OPEN` state transitions with exponential backoff.
* **Cascading Failure Protection:** Protects downstream databases from thundering-herd overload during upstream network partitions.

### 3. Mesh Topologies & Traffic Catalog
* **650+ Microservice Topologies:** Pre-configured cluster namespaces, envoy sidecar versions, and dependency graphs.
* **SLA & Canary Routing:** Dynamic traffic splitting and automated failover rules.

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/rohith1246/KubePulse-Mesh.git
cd KubePulse-Mesh

# Run tests
npm test

# Launch Observability Server
npm start
```
The Telemetry Server will initialize on `http://localhost:6000` (Metrics: `/metrics`).

---

## 🔒 License
Proprietary & Confidential. All rights reserved by `rohith1246`.
