module.exports = [
  {
    "serviceId": "SVC_MESH_0001",
    "name": "microservice-gateway-1",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0004",
      "SVC_MESH_0008"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0002",
    "name": "microservice-gateway-2",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0007",
      "SVC_MESH_0015"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0003",
    "name": "microservice-gateway-3",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0010",
      "SVC_MESH_0022"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0004",
    "name": "microservice-gateway-4",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0013",
      "SVC_MESH_0029"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0005",
    "name": "microservice-gateway-5",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0016",
      "SVC_MESH_0036"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0006",
    "name": "microservice-gateway-6",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0019",
      "SVC_MESH_0043"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0007",
    "name": "microservice-gateway-7",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0022",
      "SVC_MESH_0050"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0008",
    "name": "microservice-gateway-8",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0025",
      "SVC_MESH_0057"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0009",
    "name": "microservice-gateway-9",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0028",
      "SVC_MESH_0064"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0010",
    "name": "microservice-gateway-10",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0031",
      "SVC_MESH_0071"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0011",
    "name": "microservice-gateway-11",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0034",
      "SVC_MESH_0078"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0012",
    "name": "microservice-gateway-12",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0037",
      "SVC_MESH_0085"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0013",
    "name": "microservice-gateway-13",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0040",
      "SVC_MESH_0092"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0014",
    "name": "microservice-gateway-14",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0043",
      "SVC_MESH_0099"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0015",
    "name": "microservice-gateway-15",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0046",
      "SVC_MESH_0106"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0016",
    "name": "microservice-gateway-16",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0049",
      "SVC_MESH_0113"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0017",
    "name": "microservice-gateway-17",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0052",
      "SVC_MESH_0120"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0018",
    "name": "microservice-gateway-18",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0055",
      "SVC_MESH_0127"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0019",
    "name": "microservice-gateway-19",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0058",
      "SVC_MESH_0134"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0020",
    "name": "microservice-gateway-20",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0061",
      "SVC_MESH_0141"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0021",
    "name": "microservice-gateway-21",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0064",
      "SVC_MESH_0148"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0022",
    "name": "microservice-gateway-22",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0067",
      "SVC_MESH_0155"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0023",
    "name": "microservice-gateway-23",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0070",
      "SVC_MESH_0162"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0024",
    "name": "microservice-gateway-24",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0073",
      "SVC_MESH_0169"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0025",
    "name": "microservice-gateway-25",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0076",
      "SVC_MESH_0176"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0026",
    "name": "microservice-gateway-26",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0079",
      "SVC_MESH_0183"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0027",
    "name": "microservice-gateway-27",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0082",
      "SVC_MESH_0190"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0028",
    "name": "microservice-gateway-28",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0085",
      "SVC_MESH_0197"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0029",
    "name": "microservice-gateway-29",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0088",
      "SVC_MESH_0204"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0030",
    "name": "microservice-gateway-30",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0091",
      "SVC_MESH_0211"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0031",
    "name": "microservice-gateway-31",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0094",
      "SVC_MESH_0218"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0032",
    "name": "microservice-gateway-32",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0097",
      "SVC_MESH_0225"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0033",
    "name": "microservice-gateway-33",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0100",
      "SVC_MESH_0232"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0034",
    "name": "microservice-gateway-34",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0103",
      "SVC_MESH_0239"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0035",
    "name": "microservice-gateway-35",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0106",
      "SVC_MESH_0246"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0036",
    "name": "microservice-gateway-36",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0109",
      "SVC_MESH_0253"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0037",
    "name": "microservice-gateway-37",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0112",
      "SVC_MESH_0260"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0038",
    "name": "microservice-gateway-38",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0115",
      "SVC_MESH_0267"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0039",
    "name": "microservice-gateway-39",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0118",
      "SVC_MESH_0274"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0040",
    "name": "microservice-gateway-40",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0121",
      "SVC_MESH_0281"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0041",
    "name": "microservice-gateway-41",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0124",
      "SVC_MESH_0288"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0042",
    "name": "microservice-gateway-42",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0127",
      "SVC_MESH_0295"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0043",
    "name": "microservice-gateway-43",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0130",
      "SVC_MESH_0302"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0044",
    "name": "microservice-gateway-44",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0133",
      "SVC_MESH_0309"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0045",
    "name": "microservice-gateway-45",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0136",
      "SVC_MESH_0316"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0046",
    "name": "microservice-gateway-46",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0139",
      "SVC_MESH_0323"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0047",
    "name": "microservice-gateway-47",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0142",
      "SVC_MESH_0330"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0048",
    "name": "microservice-gateway-48",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0145",
      "SVC_MESH_0337"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0049",
    "name": "microservice-gateway-49",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0148",
      "SVC_MESH_0344"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0050",
    "name": "microservice-gateway-50",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0151",
      "SVC_MESH_0351"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0051",
    "name": "microservice-gateway-51",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0154",
      "SVC_MESH_0358"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0052",
    "name": "microservice-gateway-52",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0157",
      "SVC_MESH_0365"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0053",
    "name": "microservice-gateway-53",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0160",
      "SVC_MESH_0372"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0054",
    "name": "microservice-gateway-54",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0163",
      "SVC_MESH_0379"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0055",
    "name": "microservice-gateway-55",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0166",
      "SVC_MESH_0386"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0056",
    "name": "microservice-gateway-56",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0169",
      "SVC_MESH_0393"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0057",
    "name": "microservice-gateway-57",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0172",
      "SVC_MESH_0400"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0058",
    "name": "microservice-gateway-58",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0175",
      "SVC_MESH_0407"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0059",
    "name": "microservice-gateway-59",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0178",
      "SVC_MESH_0414"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0060",
    "name": "microservice-gateway-60",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0181",
      "SVC_MESH_0421"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0061",
    "name": "microservice-gateway-61",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0184",
      "SVC_MESH_0428"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0062",
    "name": "microservice-gateway-62",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0187",
      "SVC_MESH_0435"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0063",
    "name": "microservice-gateway-63",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0190",
      "SVC_MESH_0442"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0064",
    "name": "microservice-gateway-64",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0193",
      "SVC_MESH_0449"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0065",
    "name": "microservice-gateway-65",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0196",
      "SVC_MESH_0456"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0066",
    "name": "microservice-gateway-66",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0199",
      "SVC_MESH_0463"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0067",
    "name": "microservice-gateway-67",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0202",
      "SVC_MESH_0470"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0068",
    "name": "microservice-gateway-68",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0205",
      "SVC_MESH_0477"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0069",
    "name": "microservice-gateway-69",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0208",
      "SVC_MESH_0484"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0070",
    "name": "microservice-gateway-70",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0211",
      "SVC_MESH_0491"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0071",
    "name": "microservice-gateway-71",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0214",
      "SVC_MESH_0498"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0072",
    "name": "microservice-gateway-72",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0217",
      "SVC_MESH_0505"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0073",
    "name": "microservice-gateway-73",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0220",
      "SVC_MESH_0512"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0074",
    "name": "microservice-gateway-74",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0223",
      "SVC_MESH_0519"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0075",
    "name": "microservice-gateway-75",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0226",
      "SVC_MESH_0526"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0076",
    "name": "microservice-gateway-76",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0229",
      "SVC_MESH_0533"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0077",
    "name": "microservice-gateway-77",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0232",
      "SVC_MESH_0540"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0078",
    "name": "microservice-gateway-78",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0235",
      "SVC_MESH_0547"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0079",
    "name": "microservice-gateway-79",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0238",
      "SVC_MESH_0554"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0080",
    "name": "microservice-gateway-80",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0241",
      "SVC_MESH_0561"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0081",
    "name": "microservice-gateway-81",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0244",
      "SVC_MESH_0568"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0082",
    "name": "microservice-gateway-82",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0247",
      "SVC_MESH_0575"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0083",
    "name": "microservice-gateway-83",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0250",
      "SVC_MESH_0582"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0084",
    "name": "microservice-gateway-84",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0253",
      "SVC_MESH_0589"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0085",
    "name": "microservice-gateway-85",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0256",
      "SVC_MESH_0596"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0086",
    "name": "microservice-gateway-86",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0259",
      "SVC_MESH_0003"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0087",
    "name": "microservice-gateway-87",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0262",
      "SVC_MESH_0010"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0088",
    "name": "microservice-gateway-88",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0265",
      "SVC_MESH_0017"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0089",
    "name": "microservice-gateway-89",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0268",
      "SVC_MESH_0024"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0090",
    "name": "microservice-gateway-90",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0271",
      "SVC_MESH_0031"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0091",
    "name": "microservice-gateway-91",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0274",
      "SVC_MESH_0038"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0092",
    "name": "microservice-gateway-92",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0277",
      "SVC_MESH_0045"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0093",
    "name": "microservice-gateway-93",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0280",
      "SVC_MESH_0052"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0094",
    "name": "microservice-gateway-94",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0283",
      "SVC_MESH_0059"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0095",
    "name": "microservice-gateway-95",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0286",
      "SVC_MESH_0066"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0096",
    "name": "microservice-gateway-96",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0289",
      "SVC_MESH_0073"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0097",
    "name": "microservice-gateway-97",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0292",
      "SVC_MESH_0080"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0098",
    "name": "microservice-gateway-98",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0295",
      "SVC_MESH_0087"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0099",
    "name": "microservice-gateway-99",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0298",
      "SVC_MESH_0094"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0100",
    "name": "microservice-gateway-100",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0301",
      "SVC_MESH_0101"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0101",
    "name": "microservice-gateway-101",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0304",
      "SVC_MESH_0108"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0102",
    "name": "microservice-gateway-102",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0307",
      "SVC_MESH_0115"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0103",
    "name": "microservice-gateway-103",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0310",
      "SVC_MESH_0122"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0104",
    "name": "microservice-gateway-104",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0313",
      "SVC_MESH_0129"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0105",
    "name": "microservice-gateway-105",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0316",
      "SVC_MESH_0136"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0106",
    "name": "microservice-gateway-106",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0319",
      "SVC_MESH_0143"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0107",
    "name": "microservice-gateway-107",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0322",
      "SVC_MESH_0150"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0108",
    "name": "microservice-gateway-108",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0325",
      "SVC_MESH_0157"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0109",
    "name": "microservice-gateway-109",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0328",
      "SVC_MESH_0164"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0110",
    "name": "microservice-gateway-110",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0331",
      "SVC_MESH_0171"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0111",
    "name": "microservice-gateway-111",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0334",
      "SVC_MESH_0178"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0112",
    "name": "microservice-gateway-112",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0337",
      "SVC_MESH_0185"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0113",
    "name": "microservice-gateway-113",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0340",
      "SVC_MESH_0192"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0114",
    "name": "microservice-gateway-114",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0343",
      "SVC_MESH_0199"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0115",
    "name": "microservice-gateway-115",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0346",
      "SVC_MESH_0206"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0116",
    "name": "microservice-gateway-116",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0349",
      "SVC_MESH_0213"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0117",
    "name": "microservice-gateway-117",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0352",
      "SVC_MESH_0220"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0118",
    "name": "microservice-gateway-118",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0355",
      "SVC_MESH_0227"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0119",
    "name": "microservice-gateway-119",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0358",
      "SVC_MESH_0234"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0120",
    "name": "microservice-gateway-120",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0361",
      "SVC_MESH_0241"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0121",
    "name": "microservice-gateway-121",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0364",
      "SVC_MESH_0248"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0122",
    "name": "microservice-gateway-122",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0367",
      "SVC_MESH_0255"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0123",
    "name": "microservice-gateway-123",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0370",
      "SVC_MESH_0262"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0124",
    "name": "microservice-gateway-124",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0373",
      "SVC_MESH_0269"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0125",
    "name": "microservice-gateway-125",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0376",
      "SVC_MESH_0276"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0126",
    "name": "microservice-gateway-126",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0379",
      "SVC_MESH_0283"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0127",
    "name": "microservice-gateway-127",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0382",
      "SVC_MESH_0290"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0128",
    "name": "microservice-gateway-128",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0385",
      "SVC_MESH_0297"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0129",
    "name": "microservice-gateway-129",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0388",
      "SVC_MESH_0304"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0130",
    "name": "microservice-gateway-130",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0391",
      "SVC_MESH_0311"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0131",
    "name": "microservice-gateway-131",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0394",
      "SVC_MESH_0318"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0132",
    "name": "microservice-gateway-132",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0397",
      "SVC_MESH_0325"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0133",
    "name": "microservice-gateway-133",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0400",
      "SVC_MESH_0332"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0134",
    "name": "microservice-gateway-134",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0403",
      "SVC_MESH_0339"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0135",
    "name": "microservice-gateway-135",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0406",
      "SVC_MESH_0346"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0136",
    "name": "microservice-gateway-136",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0409",
      "SVC_MESH_0353"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0137",
    "name": "microservice-gateway-137",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0412",
      "SVC_MESH_0360"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0138",
    "name": "microservice-gateway-138",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0415",
      "SVC_MESH_0367"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0139",
    "name": "microservice-gateway-139",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0418",
      "SVC_MESH_0374"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0140",
    "name": "microservice-gateway-140",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0421",
      "SVC_MESH_0381"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0141",
    "name": "microservice-gateway-141",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0424",
      "SVC_MESH_0388"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0142",
    "name": "microservice-gateway-142",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0427",
      "SVC_MESH_0395"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0143",
    "name": "microservice-gateway-143",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0430",
      "SVC_MESH_0402"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0144",
    "name": "microservice-gateway-144",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0433",
      "SVC_MESH_0409"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0145",
    "name": "microservice-gateway-145",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0436",
      "SVC_MESH_0416"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0146",
    "name": "microservice-gateway-146",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0439",
      "SVC_MESH_0423"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0147",
    "name": "microservice-gateway-147",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0442",
      "SVC_MESH_0430"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0148",
    "name": "microservice-gateway-148",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0445",
      "SVC_MESH_0437"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0149",
    "name": "microservice-gateway-149",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0448",
      "SVC_MESH_0444"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0150",
    "name": "microservice-gateway-150",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0451",
      "SVC_MESH_0451"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0151",
    "name": "microservice-gateway-151",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0454",
      "SVC_MESH_0458"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0152",
    "name": "microservice-gateway-152",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0457",
      "SVC_MESH_0465"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0153",
    "name": "microservice-gateway-153",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0460",
      "SVC_MESH_0472"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0154",
    "name": "microservice-gateway-154",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0463",
      "SVC_MESH_0479"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0155",
    "name": "microservice-gateway-155",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0466",
      "SVC_MESH_0486"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0156",
    "name": "microservice-gateway-156",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0469",
      "SVC_MESH_0493"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0157",
    "name": "microservice-gateway-157",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0472",
      "SVC_MESH_0500"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0158",
    "name": "microservice-gateway-158",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0475",
      "SVC_MESH_0507"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0159",
    "name": "microservice-gateway-159",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0478",
      "SVC_MESH_0514"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0160",
    "name": "microservice-gateway-160",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0481",
      "SVC_MESH_0521"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0161",
    "name": "microservice-gateway-161",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0484",
      "SVC_MESH_0528"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0162",
    "name": "microservice-gateway-162",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0487",
      "SVC_MESH_0535"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0163",
    "name": "microservice-gateway-163",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0490",
      "SVC_MESH_0542"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0164",
    "name": "microservice-gateway-164",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0493",
      "SVC_MESH_0549"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0165",
    "name": "microservice-gateway-165",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0496",
      "SVC_MESH_0556"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0166",
    "name": "microservice-gateway-166",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0499",
      "SVC_MESH_0563"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0167",
    "name": "microservice-gateway-167",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0502",
      "SVC_MESH_0570"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0168",
    "name": "microservice-gateway-168",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0505",
      "SVC_MESH_0577"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0169",
    "name": "microservice-gateway-169",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0508",
      "SVC_MESH_0584"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0170",
    "name": "microservice-gateway-170",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0511",
      "SVC_MESH_0591"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0171",
    "name": "microservice-gateway-171",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0514",
      "SVC_MESH_0598"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0172",
    "name": "microservice-gateway-172",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0517",
      "SVC_MESH_0005"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0173",
    "name": "microservice-gateway-173",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0520",
      "SVC_MESH_0012"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0174",
    "name": "microservice-gateway-174",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0523",
      "SVC_MESH_0019"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0175",
    "name": "microservice-gateway-175",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0526",
      "SVC_MESH_0026"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0176",
    "name": "microservice-gateway-176",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0529",
      "SVC_MESH_0033"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0177",
    "name": "microservice-gateway-177",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0532",
      "SVC_MESH_0040"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0178",
    "name": "microservice-gateway-178",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0535",
      "SVC_MESH_0047"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0179",
    "name": "microservice-gateway-179",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0538",
      "SVC_MESH_0054"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0180",
    "name": "microservice-gateway-180",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0541",
      "SVC_MESH_0061"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0181",
    "name": "microservice-gateway-181",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0544",
      "SVC_MESH_0068"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0182",
    "name": "microservice-gateway-182",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0547",
      "SVC_MESH_0075"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0183",
    "name": "microservice-gateway-183",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0550",
      "SVC_MESH_0082"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0184",
    "name": "microservice-gateway-184",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0553",
      "SVC_MESH_0089"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0185",
    "name": "microservice-gateway-185",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0556",
      "SVC_MESH_0096"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0186",
    "name": "microservice-gateway-186",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0559",
      "SVC_MESH_0103"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0187",
    "name": "microservice-gateway-187",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0562",
      "SVC_MESH_0110"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0188",
    "name": "microservice-gateway-188",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0565",
      "SVC_MESH_0117"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0189",
    "name": "microservice-gateway-189",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0568",
      "SVC_MESH_0124"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0190",
    "name": "microservice-gateway-190",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0571",
      "SVC_MESH_0131"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0191",
    "name": "microservice-gateway-191",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0574",
      "SVC_MESH_0138"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0192",
    "name": "microservice-gateway-192",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0577",
      "SVC_MESH_0145"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0193",
    "name": "microservice-gateway-193",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0580",
      "SVC_MESH_0152"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0194",
    "name": "microservice-gateway-194",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0583",
      "SVC_MESH_0159"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0195",
    "name": "microservice-gateway-195",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0586",
      "SVC_MESH_0166"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0196",
    "name": "microservice-gateway-196",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0589",
      "SVC_MESH_0173"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0197",
    "name": "microservice-gateway-197",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0592",
      "SVC_MESH_0180"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0198",
    "name": "microservice-gateway-198",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0595",
      "SVC_MESH_0187"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0199",
    "name": "microservice-gateway-199",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0598",
      "SVC_MESH_0194"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0200",
    "name": "microservice-gateway-200",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0001",
      "SVC_MESH_0201"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0201",
    "name": "microservice-gateway-201",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0004",
      "SVC_MESH_0208"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0202",
    "name": "microservice-gateway-202",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0007",
      "SVC_MESH_0215"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0203",
    "name": "microservice-gateway-203",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0010",
      "SVC_MESH_0222"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0204",
    "name": "microservice-gateway-204",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0013",
      "SVC_MESH_0229"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0205",
    "name": "microservice-gateway-205",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0016",
      "SVC_MESH_0236"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0206",
    "name": "microservice-gateway-206",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0019",
      "SVC_MESH_0243"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0207",
    "name": "microservice-gateway-207",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0022",
      "SVC_MESH_0250"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0208",
    "name": "microservice-gateway-208",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0025",
      "SVC_MESH_0257"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0209",
    "name": "microservice-gateway-209",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0028",
      "SVC_MESH_0264"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0210",
    "name": "microservice-gateway-210",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0031",
      "SVC_MESH_0271"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0211",
    "name": "microservice-gateway-211",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0034",
      "SVC_MESH_0278"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0212",
    "name": "microservice-gateway-212",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0037",
      "SVC_MESH_0285"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0213",
    "name": "microservice-gateway-213",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0040",
      "SVC_MESH_0292"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0214",
    "name": "microservice-gateway-214",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0043",
      "SVC_MESH_0299"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0215",
    "name": "microservice-gateway-215",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0046",
      "SVC_MESH_0306"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0216",
    "name": "microservice-gateway-216",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0049",
      "SVC_MESH_0313"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0217",
    "name": "microservice-gateway-217",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0052",
      "SVC_MESH_0320"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0218",
    "name": "microservice-gateway-218",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0055",
      "SVC_MESH_0327"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0219",
    "name": "microservice-gateway-219",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0058",
      "SVC_MESH_0334"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0220",
    "name": "microservice-gateway-220",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0061",
      "SVC_MESH_0341"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0221",
    "name": "microservice-gateway-221",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0064",
      "SVC_MESH_0348"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0222",
    "name": "microservice-gateway-222",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0067",
      "SVC_MESH_0355"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0223",
    "name": "microservice-gateway-223",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0070",
      "SVC_MESH_0362"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0224",
    "name": "microservice-gateway-224",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0073",
      "SVC_MESH_0369"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0225",
    "name": "microservice-gateway-225",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0076",
      "SVC_MESH_0376"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0226",
    "name": "microservice-gateway-226",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0079",
      "SVC_MESH_0383"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0227",
    "name": "microservice-gateway-227",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0082",
      "SVC_MESH_0390"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0228",
    "name": "microservice-gateway-228",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0085",
      "SVC_MESH_0397"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0229",
    "name": "microservice-gateway-229",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0088",
      "SVC_MESH_0404"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0230",
    "name": "microservice-gateway-230",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0091",
      "SVC_MESH_0411"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0231",
    "name": "microservice-gateway-231",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0094",
      "SVC_MESH_0418"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0232",
    "name": "microservice-gateway-232",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0097",
      "SVC_MESH_0425"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0233",
    "name": "microservice-gateway-233",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0100",
      "SVC_MESH_0432"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0234",
    "name": "microservice-gateway-234",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0103",
      "SVC_MESH_0439"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0235",
    "name": "microservice-gateway-235",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0106",
      "SVC_MESH_0446"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0236",
    "name": "microservice-gateway-236",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0109",
      "SVC_MESH_0453"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0237",
    "name": "microservice-gateway-237",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0112",
      "SVC_MESH_0460"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0238",
    "name": "microservice-gateway-238",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0115",
      "SVC_MESH_0467"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0239",
    "name": "microservice-gateway-239",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0118",
      "SVC_MESH_0474"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0240",
    "name": "microservice-gateway-240",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0121",
      "SVC_MESH_0481"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0241",
    "name": "microservice-gateway-241",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0124",
      "SVC_MESH_0488"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0242",
    "name": "microservice-gateway-242",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0127",
      "SVC_MESH_0495"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0243",
    "name": "microservice-gateway-243",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0130",
      "SVC_MESH_0502"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0244",
    "name": "microservice-gateway-244",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0133",
      "SVC_MESH_0509"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0245",
    "name": "microservice-gateway-245",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0136",
      "SVC_MESH_0516"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0246",
    "name": "microservice-gateway-246",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0139",
      "SVC_MESH_0523"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0247",
    "name": "microservice-gateway-247",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0142",
      "SVC_MESH_0530"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0248",
    "name": "microservice-gateway-248",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0145",
      "SVC_MESH_0537"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0249",
    "name": "microservice-gateway-249",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0148",
      "SVC_MESH_0544"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0250",
    "name": "microservice-gateway-250",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0151",
      "SVC_MESH_0551"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0251",
    "name": "microservice-gateway-251",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0154",
      "SVC_MESH_0558"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0252",
    "name": "microservice-gateway-252",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0157",
      "SVC_MESH_0565"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0253",
    "name": "microservice-gateway-253",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0160",
      "SVC_MESH_0572"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0254",
    "name": "microservice-gateway-254",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0163",
      "SVC_MESH_0579"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0255",
    "name": "microservice-gateway-255",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0166",
      "SVC_MESH_0586"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0256",
    "name": "microservice-gateway-256",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0169",
      "SVC_MESH_0593"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0257",
    "name": "microservice-gateway-257",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0172",
      "SVC_MESH_0600"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0258",
    "name": "microservice-gateway-258",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0175",
      "SVC_MESH_0007"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0259",
    "name": "microservice-gateway-259",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0178",
      "SVC_MESH_0014"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0260",
    "name": "microservice-gateway-260",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0181",
      "SVC_MESH_0021"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0261",
    "name": "microservice-gateway-261",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0184",
      "SVC_MESH_0028"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0262",
    "name": "microservice-gateway-262",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0187",
      "SVC_MESH_0035"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0263",
    "name": "microservice-gateway-263",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0190",
      "SVC_MESH_0042"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0264",
    "name": "microservice-gateway-264",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0193",
      "SVC_MESH_0049"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0265",
    "name": "microservice-gateway-265",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0196",
      "SVC_MESH_0056"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0266",
    "name": "microservice-gateway-266",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0199",
      "SVC_MESH_0063"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0267",
    "name": "microservice-gateway-267",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0202",
      "SVC_MESH_0070"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0268",
    "name": "microservice-gateway-268",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0205",
      "SVC_MESH_0077"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0269",
    "name": "microservice-gateway-269",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0208",
      "SVC_MESH_0084"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0270",
    "name": "microservice-gateway-270",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0211",
      "SVC_MESH_0091"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0271",
    "name": "microservice-gateway-271",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0214",
      "SVC_MESH_0098"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0272",
    "name": "microservice-gateway-272",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0217",
      "SVC_MESH_0105"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0273",
    "name": "microservice-gateway-273",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0220",
      "SVC_MESH_0112"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0274",
    "name": "microservice-gateway-274",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0223",
      "SVC_MESH_0119"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0275",
    "name": "microservice-gateway-275",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0226",
      "SVC_MESH_0126"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0276",
    "name": "microservice-gateway-276",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0229",
      "SVC_MESH_0133"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0277",
    "name": "microservice-gateway-277",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0232",
      "SVC_MESH_0140"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0278",
    "name": "microservice-gateway-278",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0235",
      "SVC_MESH_0147"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0279",
    "name": "microservice-gateway-279",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0238",
      "SVC_MESH_0154"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0280",
    "name": "microservice-gateway-280",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0241",
      "SVC_MESH_0161"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0281",
    "name": "microservice-gateway-281",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0244",
      "SVC_MESH_0168"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0282",
    "name": "microservice-gateway-282",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0247",
      "SVC_MESH_0175"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0283",
    "name": "microservice-gateway-283",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0250",
      "SVC_MESH_0182"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0284",
    "name": "microservice-gateway-284",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0253",
      "SVC_MESH_0189"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0285",
    "name": "microservice-gateway-285",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0256",
      "SVC_MESH_0196"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0286",
    "name": "microservice-gateway-286",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0259",
      "SVC_MESH_0203"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0287",
    "name": "microservice-gateway-287",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0262",
      "SVC_MESH_0210"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0288",
    "name": "microservice-gateway-288",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0265",
      "SVC_MESH_0217"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0289",
    "name": "microservice-gateway-289",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0268",
      "SVC_MESH_0224"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0290",
    "name": "microservice-gateway-290",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0271",
      "SVC_MESH_0231"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0291",
    "name": "microservice-gateway-291",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0274",
      "SVC_MESH_0238"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0292",
    "name": "microservice-gateway-292",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0277",
      "SVC_MESH_0245"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0293",
    "name": "microservice-gateway-293",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0280",
      "SVC_MESH_0252"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0294",
    "name": "microservice-gateway-294",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0283",
      "SVC_MESH_0259"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0295",
    "name": "microservice-gateway-295",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0286",
      "SVC_MESH_0266"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0296",
    "name": "microservice-gateway-296",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0289",
      "SVC_MESH_0273"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0297",
    "name": "microservice-gateway-297",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0292",
      "SVC_MESH_0280"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0298",
    "name": "microservice-gateway-298",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0295",
      "SVC_MESH_0287"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0299",
    "name": "microservice-gateway-299",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0298",
      "SVC_MESH_0294"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0300",
    "name": "microservice-gateway-300",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0301",
      "SVC_MESH_0301"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0301",
    "name": "microservice-gateway-301",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0304",
      "SVC_MESH_0308"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0302",
    "name": "microservice-gateway-302",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0307",
      "SVC_MESH_0315"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0303",
    "name": "microservice-gateway-303",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0310",
      "SVC_MESH_0322"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0304",
    "name": "microservice-gateway-304",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0313",
      "SVC_MESH_0329"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0305",
    "name": "microservice-gateway-305",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0316",
      "SVC_MESH_0336"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0306",
    "name": "microservice-gateway-306",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0319",
      "SVC_MESH_0343"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0307",
    "name": "microservice-gateway-307",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0322",
      "SVC_MESH_0350"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0308",
    "name": "microservice-gateway-308",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0325",
      "SVC_MESH_0357"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0309",
    "name": "microservice-gateway-309",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0328",
      "SVC_MESH_0364"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0310",
    "name": "microservice-gateway-310",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0331",
      "SVC_MESH_0371"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0311",
    "name": "microservice-gateway-311",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0334",
      "SVC_MESH_0378"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0312",
    "name": "microservice-gateway-312",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0337",
      "SVC_MESH_0385"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0313",
    "name": "microservice-gateway-313",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0340",
      "SVC_MESH_0392"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0314",
    "name": "microservice-gateway-314",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0343",
      "SVC_MESH_0399"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0315",
    "name": "microservice-gateway-315",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0346",
      "SVC_MESH_0406"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0316",
    "name": "microservice-gateway-316",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0349",
      "SVC_MESH_0413"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0317",
    "name": "microservice-gateway-317",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0352",
      "SVC_MESH_0420"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0318",
    "name": "microservice-gateway-318",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0355",
      "SVC_MESH_0427"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0319",
    "name": "microservice-gateway-319",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0358",
      "SVC_MESH_0434"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0320",
    "name": "microservice-gateway-320",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0361",
      "SVC_MESH_0441"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0321",
    "name": "microservice-gateway-321",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0364",
      "SVC_MESH_0448"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0322",
    "name": "microservice-gateway-322",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0367",
      "SVC_MESH_0455"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0323",
    "name": "microservice-gateway-323",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0370",
      "SVC_MESH_0462"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0324",
    "name": "microservice-gateway-324",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0373",
      "SVC_MESH_0469"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0325",
    "name": "microservice-gateway-325",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0376",
      "SVC_MESH_0476"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0326",
    "name": "microservice-gateway-326",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0379",
      "SVC_MESH_0483"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0327",
    "name": "microservice-gateway-327",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0382",
      "SVC_MESH_0490"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0328",
    "name": "microservice-gateway-328",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0385",
      "SVC_MESH_0497"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0329",
    "name": "microservice-gateway-329",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0388",
      "SVC_MESH_0504"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0330",
    "name": "microservice-gateway-330",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0391",
      "SVC_MESH_0511"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0331",
    "name": "microservice-gateway-331",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0394",
      "SVC_MESH_0518"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0332",
    "name": "microservice-gateway-332",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0397",
      "SVC_MESH_0525"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0333",
    "name": "microservice-gateway-333",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0400",
      "SVC_MESH_0532"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0334",
    "name": "microservice-gateway-334",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0403",
      "SVC_MESH_0539"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0335",
    "name": "microservice-gateway-335",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0406",
      "SVC_MESH_0546"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0336",
    "name": "microservice-gateway-336",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0409",
      "SVC_MESH_0553"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0337",
    "name": "microservice-gateway-337",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0412",
      "SVC_MESH_0560"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0338",
    "name": "microservice-gateway-338",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0415",
      "SVC_MESH_0567"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0339",
    "name": "microservice-gateway-339",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0418",
      "SVC_MESH_0574"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0340",
    "name": "microservice-gateway-340",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0421",
      "SVC_MESH_0581"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0341",
    "name": "microservice-gateway-341",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0424",
      "SVC_MESH_0588"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0342",
    "name": "microservice-gateway-342",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0427",
      "SVC_MESH_0595"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0343",
    "name": "microservice-gateway-343",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0430",
      "SVC_MESH_0002"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0344",
    "name": "microservice-gateway-344",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0433",
      "SVC_MESH_0009"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0345",
    "name": "microservice-gateway-345",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0436",
      "SVC_MESH_0016"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0346",
    "name": "microservice-gateway-346",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0439",
      "SVC_MESH_0023"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0347",
    "name": "microservice-gateway-347",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0442",
      "SVC_MESH_0030"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0348",
    "name": "microservice-gateway-348",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0445",
      "SVC_MESH_0037"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0349",
    "name": "microservice-gateway-349",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0448",
      "SVC_MESH_0044"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0350",
    "name": "microservice-gateway-350",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0451",
      "SVC_MESH_0051"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0351",
    "name": "microservice-gateway-351",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0454",
      "SVC_MESH_0058"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0352",
    "name": "microservice-gateway-352",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0457",
      "SVC_MESH_0065"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0353",
    "name": "microservice-gateway-353",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0460",
      "SVC_MESH_0072"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0354",
    "name": "microservice-gateway-354",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0463",
      "SVC_MESH_0079"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0355",
    "name": "microservice-gateway-355",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0466",
      "SVC_MESH_0086"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0356",
    "name": "microservice-gateway-356",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0469",
      "SVC_MESH_0093"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0357",
    "name": "microservice-gateway-357",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0472",
      "SVC_MESH_0100"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0358",
    "name": "microservice-gateway-358",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0475",
      "SVC_MESH_0107"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0359",
    "name": "microservice-gateway-359",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0478",
      "SVC_MESH_0114"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0360",
    "name": "microservice-gateway-360",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0481",
      "SVC_MESH_0121"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0361",
    "name": "microservice-gateway-361",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0484",
      "SVC_MESH_0128"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0362",
    "name": "microservice-gateway-362",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0487",
      "SVC_MESH_0135"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0363",
    "name": "microservice-gateway-363",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0490",
      "SVC_MESH_0142"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0364",
    "name": "microservice-gateway-364",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0493",
      "SVC_MESH_0149"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0365",
    "name": "microservice-gateway-365",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0496",
      "SVC_MESH_0156"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0366",
    "name": "microservice-gateway-366",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0499",
      "SVC_MESH_0163"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0367",
    "name": "microservice-gateway-367",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0502",
      "SVC_MESH_0170"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0368",
    "name": "microservice-gateway-368",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0505",
      "SVC_MESH_0177"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0369",
    "name": "microservice-gateway-369",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0508",
      "SVC_MESH_0184"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0370",
    "name": "microservice-gateway-370",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0511",
      "SVC_MESH_0191"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0371",
    "name": "microservice-gateway-371",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0514",
      "SVC_MESH_0198"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0372",
    "name": "microservice-gateway-372",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0517",
      "SVC_MESH_0205"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0373",
    "name": "microservice-gateway-373",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0520",
      "SVC_MESH_0212"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0374",
    "name": "microservice-gateway-374",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0523",
      "SVC_MESH_0219"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0375",
    "name": "microservice-gateway-375",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0526",
      "SVC_MESH_0226"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0376",
    "name": "microservice-gateway-376",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0529",
      "SVC_MESH_0233"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0377",
    "name": "microservice-gateway-377",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0532",
      "SVC_MESH_0240"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0378",
    "name": "microservice-gateway-378",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0535",
      "SVC_MESH_0247"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0379",
    "name": "microservice-gateway-379",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0538",
      "SVC_MESH_0254"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0380",
    "name": "microservice-gateway-380",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0541",
      "SVC_MESH_0261"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0381",
    "name": "microservice-gateway-381",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0544",
      "SVC_MESH_0268"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0382",
    "name": "microservice-gateway-382",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0547",
      "SVC_MESH_0275"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0383",
    "name": "microservice-gateway-383",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0550",
      "SVC_MESH_0282"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0384",
    "name": "microservice-gateway-384",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0553",
      "SVC_MESH_0289"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0385",
    "name": "microservice-gateway-385",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0556",
      "SVC_MESH_0296"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0386",
    "name": "microservice-gateway-386",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0559",
      "SVC_MESH_0303"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0387",
    "name": "microservice-gateway-387",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0562",
      "SVC_MESH_0310"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0388",
    "name": "microservice-gateway-388",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0565",
      "SVC_MESH_0317"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0389",
    "name": "microservice-gateway-389",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0568",
      "SVC_MESH_0324"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0390",
    "name": "microservice-gateway-390",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0571",
      "SVC_MESH_0331"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0391",
    "name": "microservice-gateway-391",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0574",
      "SVC_MESH_0338"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0392",
    "name": "microservice-gateway-392",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0577",
      "SVC_MESH_0345"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0393",
    "name": "microservice-gateway-393",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0580",
      "SVC_MESH_0352"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0394",
    "name": "microservice-gateway-394",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0583",
      "SVC_MESH_0359"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0395",
    "name": "microservice-gateway-395",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0586",
      "SVC_MESH_0366"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0396",
    "name": "microservice-gateway-396",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0589",
      "SVC_MESH_0373"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0397",
    "name": "microservice-gateway-397",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0592",
      "SVC_MESH_0380"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0398",
    "name": "microservice-gateway-398",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0595",
      "SVC_MESH_0387"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0399",
    "name": "microservice-gateway-399",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0598",
      "SVC_MESH_0394"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0400",
    "name": "microservice-gateway-400",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0001",
      "SVC_MESH_0401"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0401",
    "name": "microservice-gateway-401",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0004",
      "SVC_MESH_0408"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0402",
    "name": "microservice-gateway-402",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0007",
      "SVC_MESH_0415"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0403",
    "name": "microservice-gateway-403",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0010",
      "SVC_MESH_0422"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0404",
    "name": "microservice-gateway-404",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0013",
      "SVC_MESH_0429"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0405",
    "name": "microservice-gateway-405",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0016",
      "SVC_MESH_0436"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0406",
    "name": "microservice-gateway-406",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0019",
      "SVC_MESH_0443"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0407",
    "name": "microservice-gateway-407",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0022",
      "SVC_MESH_0450"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0408",
    "name": "microservice-gateway-408",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0025",
      "SVC_MESH_0457"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0409",
    "name": "microservice-gateway-409",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0028",
      "SVC_MESH_0464"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0410",
    "name": "microservice-gateway-410",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0031",
      "SVC_MESH_0471"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0411",
    "name": "microservice-gateway-411",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0034",
      "SVC_MESH_0478"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0412",
    "name": "microservice-gateway-412",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0037",
      "SVC_MESH_0485"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0413",
    "name": "microservice-gateway-413",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0040",
      "SVC_MESH_0492"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0414",
    "name": "microservice-gateway-414",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0043",
      "SVC_MESH_0499"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0415",
    "name": "microservice-gateway-415",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0046",
      "SVC_MESH_0506"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0416",
    "name": "microservice-gateway-416",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0049",
      "SVC_MESH_0513"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0417",
    "name": "microservice-gateway-417",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0052",
      "SVC_MESH_0520"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0418",
    "name": "microservice-gateway-418",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0055",
      "SVC_MESH_0527"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0419",
    "name": "microservice-gateway-419",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0058",
      "SVC_MESH_0534"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0420",
    "name": "microservice-gateway-420",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0061",
      "SVC_MESH_0541"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0421",
    "name": "microservice-gateway-421",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0064",
      "SVC_MESH_0548"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0422",
    "name": "microservice-gateway-422",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0067",
      "SVC_MESH_0555"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0423",
    "name": "microservice-gateway-423",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0070",
      "SVC_MESH_0562"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0424",
    "name": "microservice-gateway-424",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0073",
      "SVC_MESH_0569"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0425",
    "name": "microservice-gateway-425",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0076",
      "SVC_MESH_0576"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0426",
    "name": "microservice-gateway-426",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0079",
      "SVC_MESH_0583"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0427",
    "name": "microservice-gateway-427",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0082",
      "SVC_MESH_0590"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0428",
    "name": "microservice-gateway-428",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0085",
      "SVC_MESH_0597"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0429",
    "name": "microservice-gateway-429",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0088",
      "SVC_MESH_0004"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0430",
    "name": "microservice-gateway-430",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0091",
      "SVC_MESH_0011"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0431",
    "name": "microservice-gateway-431",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0094",
      "SVC_MESH_0018"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0432",
    "name": "microservice-gateway-432",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0097",
      "SVC_MESH_0025"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0433",
    "name": "microservice-gateway-433",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0100",
      "SVC_MESH_0032"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0434",
    "name": "microservice-gateway-434",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0103",
      "SVC_MESH_0039"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0435",
    "name": "microservice-gateway-435",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0106",
      "SVC_MESH_0046"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0436",
    "name": "microservice-gateway-436",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0109",
      "SVC_MESH_0053"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0437",
    "name": "microservice-gateway-437",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0112",
      "SVC_MESH_0060"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0438",
    "name": "microservice-gateway-438",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0115",
      "SVC_MESH_0067"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0439",
    "name": "microservice-gateway-439",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0118",
      "SVC_MESH_0074"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0440",
    "name": "microservice-gateway-440",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0121",
      "SVC_MESH_0081"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0441",
    "name": "microservice-gateway-441",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0124",
      "SVC_MESH_0088"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0442",
    "name": "microservice-gateway-442",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0127",
      "SVC_MESH_0095"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0443",
    "name": "microservice-gateway-443",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0130",
      "SVC_MESH_0102"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0444",
    "name": "microservice-gateway-444",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0133",
      "SVC_MESH_0109"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0445",
    "name": "microservice-gateway-445",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0136",
      "SVC_MESH_0116"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0446",
    "name": "microservice-gateway-446",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0139",
      "SVC_MESH_0123"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0447",
    "name": "microservice-gateway-447",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0142",
      "SVC_MESH_0130"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0448",
    "name": "microservice-gateway-448",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0145",
      "SVC_MESH_0137"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0449",
    "name": "microservice-gateway-449",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0148",
      "SVC_MESH_0144"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0450",
    "name": "microservice-gateway-450",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0151",
      "SVC_MESH_0151"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0451",
    "name": "microservice-gateway-451",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0154",
      "SVC_MESH_0158"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0452",
    "name": "microservice-gateway-452",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0157",
      "SVC_MESH_0165"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0453",
    "name": "microservice-gateway-453",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0160",
      "SVC_MESH_0172"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0454",
    "name": "microservice-gateway-454",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0163",
      "SVC_MESH_0179"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0455",
    "name": "microservice-gateway-455",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0166",
      "SVC_MESH_0186"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0456",
    "name": "microservice-gateway-456",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0169",
      "SVC_MESH_0193"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0457",
    "name": "microservice-gateway-457",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0172",
      "SVC_MESH_0200"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0458",
    "name": "microservice-gateway-458",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0175",
      "SVC_MESH_0207"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0459",
    "name": "microservice-gateway-459",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0178",
      "SVC_MESH_0214"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0460",
    "name": "microservice-gateway-460",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0181",
      "SVC_MESH_0221"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0461",
    "name": "microservice-gateway-461",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0184",
      "SVC_MESH_0228"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0462",
    "name": "microservice-gateway-462",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0187",
      "SVC_MESH_0235"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0463",
    "name": "microservice-gateway-463",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0190",
      "SVC_MESH_0242"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0464",
    "name": "microservice-gateway-464",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0193",
      "SVC_MESH_0249"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0465",
    "name": "microservice-gateway-465",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0196",
      "SVC_MESH_0256"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0466",
    "name": "microservice-gateway-466",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0199",
      "SVC_MESH_0263"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0467",
    "name": "microservice-gateway-467",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0202",
      "SVC_MESH_0270"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0468",
    "name": "microservice-gateway-468",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0205",
      "SVC_MESH_0277"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0469",
    "name": "microservice-gateway-469",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0208",
      "SVC_MESH_0284"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0470",
    "name": "microservice-gateway-470",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0211",
      "SVC_MESH_0291"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0471",
    "name": "microservice-gateway-471",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0214",
      "SVC_MESH_0298"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0472",
    "name": "microservice-gateway-472",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0217",
      "SVC_MESH_0305"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0473",
    "name": "microservice-gateway-473",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0220",
      "SVC_MESH_0312"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0474",
    "name": "microservice-gateway-474",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0223",
      "SVC_MESH_0319"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0475",
    "name": "microservice-gateway-475",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0226",
      "SVC_MESH_0326"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0476",
    "name": "microservice-gateway-476",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0229",
      "SVC_MESH_0333"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0477",
    "name": "microservice-gateway-477",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0232",
      "SVC_MESH_0340"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0478",
    "name": "microservice-gateway-478",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0235",
      "SVC_MESH_0347"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0479",
    "name": "microservice-gateway-479",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0238",
      "SVC_MESH_0354"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0480",
    "name": "microservice-gateway-480",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0241",
      "SVC_MESH_0361"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0481",
    "name": "microservice-gateway-481",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0244",
      "SVC_MESH_0368"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0482",
    "name": "microservice-gateway-482",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0247",
      "SVC_MESH_0375"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0483",
    "name": "microservice-gateway-483",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0250",
      "SVC_MESH_0382"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0484",
    "name": "microservice-gateway-484",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0253",
      "SVC_MESH_0389"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0485",
    "name": "microservice-gateway-485",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0256",
      "SVC_MESH_0396"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0486",
    "name": "microservice-gateway-486",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0259",
      "SVC_MESH_0403"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0487",
    "name": "microservice-gateway-487",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0262",
      "SVC_MESH_0410"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0488",
    "name": "microservice-gateway-488",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0265",
      "SVC_MESH_0417"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0489",
    "name": "microservice-gateway-489",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0268",
      "SVC_MESH_0424"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0490",
    "name": "microservice-gateway-490",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0271",
      "SVC_MESH_0431"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0491",
    "name": "microservice-gateway-491",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0274",
      "SVC_MESH_0438"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0492",
    "name": "microservice-gateway-492",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0277",
      "SVC_MESH_0445"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0493",
    "name": "microservice-gateway-493",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0280",
      "SVC_MESH_0452"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0494",
    "name": "microservice-gateway-494",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0283",
      "SVC_MESH_0459"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0495",
    "name": "microservice-gateway-495",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0286",
      "SVC_MESH_0466"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0496",
    "name": "microservice-gateway-496",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0289",
      "SVC_MESH_0473"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0497",
    "name": "microservice-gateway-497",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0292",
      "SVC_MESH_0480"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0498",
    "name": "microservice-gateway-498",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0295",
      "SVC_MESH_0487"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0499",
    "name": "microservice-gateway-499",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0298",
      "SVC_MESH_0494"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0500",
    "name": "microservice-gateway-500",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0301",
      "SVC_MESH_0501"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0501",
    "name": "microservice-gateway-501",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0304",
      "SVC_MESH_0508"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0502",
    "name": "microservice-gateway-502",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0307",
      "SVC_MESH_0515"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0503",
    "name": "microservice-gateway-503",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0310",
      "SVC_MESH_0522"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0504",
    "name": "microservice-gateway-504",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0313",
      "SVC_MESH_0529"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0505",
    "name": "microservice-gateway-505",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0316",
      "SVC_MESH_0536"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0506",
    "name": "microservice-gateway-506",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0319",
      "SVC_MESH_0543"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0507",
    "name": "microservice-gateway-507",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0322",
      "SVC_MESH_0550"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0508",
    "name": "microservice-gateway-508",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0325",
      "SVC_MESH_0557"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0509",
    "name": "microservice-gateway-509",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0328",
      "SVC_MESH_0564"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0510",
    "name": "microservice-gateway-510",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0331",
      "SVC_MESH_0571"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0511",
    "name": "microservice-gateway-511",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0334",
      "SVC_MESH_0578"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0512",
    "name": "microservice-gateway-512",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0337",
      "SVC_MESH_0585"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0513",
    "name": "microservice-gateway-513",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0340",
      "SVC_MESH_0592"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0514",
    "name": "microservice-gateway-514",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0343",
      "SVC_MESH_0599"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0515",
    "name": "microservice-gateway-515",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0346",
      "SVC_MESH_0006"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0516",
    "name": "microservice-gateway-516",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0349",
      "SVC_MESH_0013"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0517",
    "name": "microservice-gateway-517",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0352",
      "SVC_MESH_0020"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0518",
    "name": "microservice-gateway-518",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0355",
      "SVC_MESH_0027"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0519",
    "name": "microservice-gateway-519",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0358",
      "SVC_MESH_0034"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0520",
    "name": "microservice-gateway-520",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0361",
      "SVC_MESH_0041"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0521",
    "name": "microservice-gateway-521",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0364",
      "SVC_MESH_0048"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0522",
    "name": "microservice-gateway-522",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0367",
      "SVC_MESH_0055"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0523",
    "name": "microservice-gateway-523",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0370",
      "SVC_MESH_0062"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0524",
    "name": "microservice-gateway-524",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0373",
      "SVC_MESH_0069"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0525",
    "name": "microservice-gateway-525",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0376",
      "SVC_MESH_0076"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0526",
    "name": "microservice-gateway-526",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0379",
      "SVC_MESH_0083"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0527",
    "name": "microservice-gateway-527",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0382",
      "SVC_MESH_0090"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0528",
    "name": "microservice-gateway-528",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0385",
      "SVC_MESH_0097"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0529",
    "name": "microservice-gateway-529",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0388",
      "SVC_MESH_0104"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0530",
    "name": "microservice-gateway-530",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0391",
      "SVC_MESH_0111"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0531",
    "name": "microservice-gateway-531",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0394",
      "SVC_MESH_0118"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0532",
    "name": "microservice-gateway-532",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0397",
      "SVC_MESH_0125"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0533",
    "name": "microservice-gateway-533",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0400",
      "SVC_MESH_0132"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0534",
    "name": "microservice-gateway-534",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0403",
      "SVC_MESH_0139"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0535",
    "name": "microservice-gateway-535",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0406",
      "SVC_MESH_0146"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0536",
    "name": "microservice-gateway-536",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0409",
      "SVC_MESH_0153"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0537",
    "name": "microservice-gateway-537",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0412",
      "SVC_MESH_0160"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0538",
    "name": "microservice-gateway-538",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0415",
      "SVC_MESH_0167"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0539",
    "name": "microservice-gateway-539",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0418",
      "SVC_MESH_0174"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0540",
    "name": "microservice-gateway-540",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0421",
      "SVC_MESH_0181"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0541",
    "name": "microservice-gateway-541",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0424",
      "SVC_MESH_0188"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0542",
    "name": "microservice-gateway-542",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0427",
      "SVC_MESH_0195"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0543",
    "name": "microservice-gateway-543",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0430",
      "SVC_MESH_0202"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0544",
    "name": "microservice-gateway-544",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0433",
      "SVC_MESH_0209"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0545",
    "name": "microservice-gateway-545",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0436",
      "SVC_MESH_0216"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0546",
    "name": "microservice-gateway-546",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0439",
      "SVC_MESH_0223"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0547",
    "name": "microservice-gateway-547",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0442",
      "SVC_MESH_0230"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0548",
    "name": "microservice-gateway-548",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0445",
      "SVC_MESH_0237"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0549",
    "name": "microservice-gateway-549",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0448",
      "SVC_MESH_0244"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0550",
    "name": "microservice-gateway-550",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0451",
      "SVC_MESH_0251"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0551",
    "name": "microservice-gateway-551",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0454",
      "SVC_MESH_0258"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0552",
    "name": "microservice-gateway-552",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0457",
      "SVC_MESH_0265"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0553",
    "name": "microservice-gateway-553",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0460",
      "SVC_MESH_0272"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0554",
    "name": "microservice-gateway-554",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0463",
      "SVC_MESH_0279"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0555",
    "name": "microservice-gateway-555",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0466",
      "SVC_MESH_0286"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0556",
    "name": "microservice-gateway-556",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0469",
      "SVC_MESH_0293"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0557",
    "name": "microservice-gateway-557",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0472",
      "SVC_MESH_0300"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0558",
    "name": "microservice-gateway-558",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0475",
      "SVC_MESH_0307"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0559",
    "name": "microservice-gateway-559",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0478",
      "SVC_MESH_0314"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0560",
    "name": "microservice-gateway-560",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0481",
      "SVC_MESH_0321"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0561",
    "name": "microservice-gateway-561",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0484",
      "SVC_MESH_0328"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0562",
    "name": "microservice-gateway-562",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0487",
      "SVC_MESH_0335"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0563",
    "name": "microservice-gateway-563",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0490",
      "SVC_MESH_0342"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0564",
    "name": "microservice-gateway-564",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0493",
      "SVC_MESH_0349"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0565",
    "name": "microservice-gateway-565",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0496",
      "SVC_MESH_0356"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0566",
    "name": "microservice-gateway-566",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0499",
      "SVC_MESH_0363"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0567",
    "name": "microservice-gateway-567",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0502",
      "SVC_MESH_0370"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0568",
    "name": "microservice-gateway-568",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0505",
      "SVC_MESH_0377"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0569",
    "name": "microservice-gateway-569",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0508",
      "SVC_MESH_0384"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0570",
    "name": "microservice-gateway-570",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0511",
      "SVC_MESH_0391"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0571",
    "name": "microservice-gateway-571",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0514",
      "SVC_MESH_0398"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0572",
    "name": "microservice-gateway-572",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0517",
      "SVC_MESH_0405"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0573",
    "name": "microservice-gateway-573",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0520",
      "SVC_MESH_0412"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0574",
    "name": "microservice-gateway-574",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0523",
      "SVC_MESH_0419"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0575",
    "name": "microservice-gateway-575",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0526",
      "SVC_MESH_0426"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0576",
    "name": "microservice-gateway-576",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0529",
      "SVC_MESH_0433"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0577",
    "name": "microservice-gateway-577",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0532",
      "SVC_MESH_0440"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0578",
    "name": "microservice-gateway-578",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0535",
      "SVC_MESH_0447"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0579",
    "name": "microservice-gateway-579",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0538",
      "SVC_MESH_0454"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0580",
    "name": "microservice-gateway-580",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0541",
      "SVC_MESH_0461"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0581",
    "name": "microservice-gateway-581",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0544",
      "SVC_MESH_0468"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0582",
    "name": "microservice-gateway-582",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0547",
      "SVC_MESH_0475"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0583",
    "name": "microservice-gateway-583",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0550",
      "SVC_MESH_0482"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0584",
    "name": "microservice-gateway-584",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0553",
      "SVC_MESH_0489"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0585",
    "name": "microservice-gateway-585",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0556",
      "SVC_MESH_0496"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0586",
    "name": "microservice-gateway-586",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0559",
      "SVC_MESH_0503"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0587",
    "name": "microservice-gateway-587",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0562",
      "SVC_MESH_0510"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0588",
    "name": "microservice-gateway-588",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0565",
      "SVC_MESH_0517"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0589",
    "name": "microservice-gateway-589",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0568",
      "SVC_MESH_0524"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0590",
    "name": "microservice-gateway-590",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0571",
      "SVC_MESH_0531"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0591",
    "name": "microservice-gateway-591",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0574",
      "SVC_MESH_0538"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0592",
    "name": "microservice-gateway-592",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0577",
      "SVC_MESH_0545"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0593",
    "name": "microservice-gateway-593",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0580",
      "SVC_MESH_0552"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0594",
    "name": "microservice-gateway-594",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 9,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0583",
      "SVC_MESH_0559"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0595",
    "name": "microservice-gateway-595",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 3,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0586",
      "SVC_MESH_0566"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0596",
    "name": "microservice-gateway-596",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 4,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0589",
      "SVC_MESH_0573"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0597",
    "name": "microservice-gateway-597",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 5,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0592",
      "SVC_MESH_0580"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0598",
    "name": "microservice-gateway-598",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 6,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0595",
      "SVC_MESH_0587"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0599",
    "name": "microservice-gateway-599",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 7,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0598",
      "SVC_MESH_0594"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0600",
    "name": "microservice-gateway-600",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 8,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0001",
      "SVC_MESH_0001"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0601",
    "name": "microservice-gateway-601",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 9,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0004",
      "SVC_MESH_0008"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0602",
    "name": "microservice-gateway-602",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 3,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0007",
      "SVC_MESH_0015"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0603",
    "name": "microservice-gateway-603",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 4,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0010",
      "SVC_MESH_0022"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0604",
    "name": "microservice-gateway-604",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 5,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0013",
      "SVC_MESH_0029"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0605",
    "name": "microservice-gateway-605",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 6,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0016",
      "SVC_MESH_0036"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0606",
    "name": "microservice-gateway-606",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 7,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0019",
      "SVC_MESH_0043"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0607",
    "name": "microservice-gateway-607",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 8,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0022",
      "SVC_MESH_0050"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0608",
    "name": "microservice-gateway-608",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 9,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0025",
      "SVC_MESH_0057"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0609",
    "name": "microservice-gateway-609",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 3,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0028",
      "SVC_MESH_0064"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0610",
    "name": "microservice-gateway-610",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 4,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0031",
      "SVC_MESH_0071"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0611",
    "name": "microservice-gateway-611",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 5,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0034",
      "SVC_MESH_0078"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0612",
    "name": "microservice-gateway-612",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 6,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0037",
      "SVC_MESH_0085"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0613",
    "name": "microservice-gateway-613",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 7,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0040",
      "SVC_MESH_0092"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0614",
    "name": "microservice-gateway-614",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 8,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0043",
      "SVC_MESH_0099"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0615",
    "name": "microservice-gateway-615",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 9,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0046",
      "SVC_MESH_0106"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0616",
    "name": "microservice-gateway-616",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 3,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0049",
      "SVC_MESH_0113"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0617",
    "name": "microservice-gateway-617",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 4,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0052",
      "SVC_MESH_0120"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0618",
    "name": "microservice-gateway-618",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 5,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0055",
      "SVC_MESH_0127"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0619",
    "name": "microservice-gateway-619",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 6,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0058",
      "SVC_MESH_0134"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0620",
    "name": "microservice-gateway-620",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 7,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0061",
      "SVC_MESH_0141"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0621",
    "name": "microservice-gateway-621",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 8,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0064",
      "SVC_MESH_0148"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0622",
    "name": "microservice-gateway-622",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 9,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0067",
      "SVC_MESH_0155"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0623",
    "name": "microservice-gateway-623",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 3,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0070",
      "SVC_MESH_0162"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0624",
    "name": "microservice-gateway-624",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 4,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0073",
      "SVC_MESH_0169"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0625",
    "name": "microservice-gateway-625",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 5,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0076",
      "SVC_MESH_0176"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0626",
    "name": "microservice-gateway-626",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 6,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0079",
      "SVC_MESH_0183"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0627",
    "name": "microservice-gateway-627",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 7,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0082",
      "SVC_MESH_0190"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0628",
    "name": "microservice-gateway-628",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 8,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0085",
      "SVC_MESH_0197"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0629",
    "name": "microservice-gateway-629",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 9,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0088",
      "SVC_MESH_0204"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0630",
    "name": "microservice-gateway-630",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 3,
    "maxP99LatencyMs": 55.0,
    "dependencies": [
      "SVC_MESH_0091",
      "SVC_MESH_0211"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0631",
    "name": "microservice-gateway-631",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 4,
    "maxP99LatencyMs": 56.0,
    "dependencies": [
      "SVC_MESH_0094",
      "SVC_MESH_0218"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0632",
    "name": "microservice-gateway-632",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 5,
    "maxP99LatencyMs": 57.0,
    "dependencies": [
      "SVC_MESH_0097",
      "SVC_MESH_0225"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0633",
    "name": "microservice-gateway-633",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 6,
    "maxP99LatencyMs": 58.0,
    "dependencies": [
      "SVC_MESH_0100",
      "SVC_MESH_0232"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0634",
    "name": "microservice-gateway-634",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 7,
    "maxP99LatencyMs": 59.0,
    "dependencies": [
      "SVC_MESH_0103",
      "SVC_MESH_0239"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0635",
    "name": "microservice-gateway-635",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 8,
    "maxP99LatencyMs": 60.0,
    "dependencies": [
      "SVC_MESH_0106",
      "SVC_MESH_0246"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0636",
    "name": "microservice-gateway-636",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 9,
    "maxP99LatencyMs": 61.0,
    "dependencies": [
      "SVC_MESH_0109",
      "SVC_MESH_0253"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0637",
    "name": "microservice-gateway-637",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 3,
    "maxP99LatencyMs": 62.0,
    "dependencies": [
      "SVC_MESH_0112",
      "SVC_MESH_0260"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0638",
    "name": "microservice-gateway-638",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 4,
    "maxP99LatencyMs": 63.0,
    "dependencies": [
      "SVC_MESH_0115",
      "SVC_MESH_0267"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0639",
    "name": "microservice-gateway-639",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 5,
    "maxP99LatencyMs": 64.0,
    "dependencies": [
      "SVC_MESH_0118",
      "SVC_MESH_0274"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0640",
    "name": "microservice-gateway-640",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 6,
    "maxP99LatencyMs": 45.0,
    "dependencies": [
      "SVC_MESH_0121",
      "SVC_MESH_0281"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0641",
    "name": "microservice-gateway-641",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 7,
    "maxP99LatencyMs": 46.0,
    "dependencies": [
      "SVC_MESH_0124",
      "SVC_MESH_0288"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0642",
    "name": "microservice-gateway-642",
    "cluster": "k8s-cluster-5",
    "namespace": "ns-production-7",
    "replicas": 8,
    "maxP99LatencyMs": 47.0,
    "dependencies": [
      "SVC_MESH_0127",
      "SVC_MESH_0295"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0643",
    "name": "microservice-gateway-643",
    "cluster": "k8s-cluster-7",
    "namespace": "ns-production-2",
    "replicas": 9,
    "maxP99LatencyMs": 48.0,
    "dependencies": [
      "SVC_MESH_0130",
      "SVC_MESH_0302"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0644",
    "name": "microservice-gateway-644",
    "cluster": "k8s-cluster-9",
    "namespace": "ns-production-5",
    "replicas": 3,
    "maxP99LatencyMs": 49.0,
    "dependencies": [
      "SVC_MESH_0133",
      "SVC_MESH_0309"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0645",
    "name": "microservice-gateway-645",
    "cluster": "k8s-cluster-11",
    "namespace": "ns-production-8",
    "replicas": 4,
    "maxP99LatencyMs": 50.0,
    "dependencies": [
      "SVC_MESH_0136",
      "SVC_MESH_0316"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0646",
    "name": "microservice-gateway-646",
    "cluster": "k8s-cluster-13",
    "namespace": "ns-production-3",
    "replicas": 5,
    "maxP99LatencyMs": 51.0,
    "dependencies": [
      "SVC_MESH_0139",
      "SVC_MESH_0323"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0647",
    "name": "microservice-gateway-647",
    "cluster": "k8s-cluster-15",
    "namespace": "ns-production-6",
    "replicas": 6,
    "maxP99LatencyMs": 52.0,
    "dependencies": [
      "SVC_MESH_0142",
      "SVC_MESH_0330"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0648",
    "name": "microservice-gateway-648",
    "cluster": "k8s-cluster-1",
    "namespace": "ns-production-1",
    "replicas": 7,
    "maxP99LatencyMs": 53.0,
    "dependencies": [
      "SVC_MESH_0145",
      "SVC_MESH_0337"
    ],
    "envoySidecarVersion": "1.30.2"
  },
  {
    "serviceId": "SVC_MESH_0649",
    "name": "microservice-gateway-649",
    "cluster": "k8s-cluster-3",
    "namespace": "ns-production-4",
    "replicas": 8,
    "maxP99LatencyMs": 54.0,
    "dependencies": [
      "SVC_MESH_0148",
      "SVC_MESH_0344"
    ],
    "envoySidecarVersion": "1.30.2"
  }
];
