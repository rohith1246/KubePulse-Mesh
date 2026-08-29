module.exports = [
  {
    "routeId": "ROUTE_MESH_0001",
    "pathPrefix": "/api/v1/resource-1",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0003",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0004",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0002",
    "pathPrefix": "/api/v1/resource-2",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0005",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0007",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0003",
    "pathPrefix": "/api/v1/resource-3",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0007",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0010",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0004",
    "pathPrefix": "/api/v1/resource-4",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0009",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0013",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0005",
    "pathPrefix": "/api/v1/resource-5",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0011",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0016",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0006",
    "pathPrefix": "/api/v1/resource-6",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0013",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0019",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0007",
    "pathPrefix": "/api/v1/resource-7",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0015",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0022",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0008",
    "pathPrefix": "/api/v1/resource-8",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0017",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0025",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0009",
    "pathPrefix": "/api/v1/resource-9",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0019",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0028",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0010",
    "pathPrefix": "/api/v1/resource-10",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0021",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0031",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0011",
    "pathPrefix": "/api/v1/resource-11",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0023",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0034",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0012",
    "pathPrefix": "/api/v1/resource-12",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0025",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0037",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0013",
    "pathPrefix": "/api/v1/resource-13",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0027",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0040",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0014",
    "pathPrefix": "/api/v1/resource-14",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0029",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0043",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0015",
    "pathPrefix": "/api/v1/resource-15",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0031",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0046",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0016",
    "pathPrefix": "/api/v1/resource-16",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0033",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0049",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0017",
    "pathPrefix": "/api/v1/resource-17",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0035",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0052",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0018",
    "pathPrefix": "/api/v1/resource-18",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0037",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0055",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0019",
    "pathPrefix": "/api/v1/resource-19",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0039",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0058",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0020",
    "pathPrefix": "/api/v1/resource-20",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0041",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0061",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0021",
    "pathPrefix": "/api/v1/resource-21",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0043",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0064",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0022",
    "pathPrefix": "/api/v1/resource-22",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0045",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0067",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0023",
    "pathPrefix": "/api/v1/resource-23",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0047",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0070",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0024",
    "pathPrefix": "/api/v1/resource-24",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0049",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0073",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0025",
    "pathPrefix": "/api/v1/resource-25",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0051",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0076",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0026",
    "pathPrefix": "/api/v1/resource-26",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0053",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0079",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0027",
    "pathPrefix": "/api/v1/resource-27",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0055",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0082",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0028",
    "pathPrefix": "/api/v1/resource-28",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0057",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0085",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0029",
    "pathPrefix": "/api/v1/resource-29",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0059",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0088",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0030",
    "pathPrefix": "/api/v1/resource-30",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0061",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0091",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0031",
    "pathPrefix": "/api/v1/resource-31",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0063",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0094",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0032",
    "pathPrefix": "/api/v1/resource-32",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0065",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0097",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0033",
    "pathPrefix": "/api/v1/resource-33",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0067",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0100",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0034",
    "pathPrefix": "/api/v1/resource-34",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0069",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0103",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0035",
    "pathPrefix": "/api/v1/resource-35",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0071",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0106",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0036",
    "pathPrefix": "/api/v1/resource-36",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0073",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0109",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0037",
    "pathPrefix": "/api/v1/resource-37",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0075",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0112",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0038",
    "pathPrefix": "/api/v1/resource-38",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0077",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0115",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0039",
    "pathPrefix": "/api/v1/resource-39",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0079",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0118",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0040",
    "pathPrefix": "/api/v1/resource-40",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0081",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0121",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0041",
    "pathPrefix": "/api/v1/resource-41",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0083",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0124",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0042",
    "pathPrefix": "/api/v1/resource-42",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0085",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0127",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0043",
    "pathPrefix": "/api/v1/resource-43",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0087",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0130",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0044",
    "pathPrefix": "/api/v1/resource-44",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0089",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0133",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0045",
    "pathPrefix": "/api/v1/resource-45",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0091",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0136",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0046",
    "pathPrefix": "/api/v1/resource-46",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0093",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0139",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0047",
    "pathPrefix": "/api/v1/resource-47",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0095",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0142",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0048",
    "pathPrefix": "/api/v1/resource-48",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0097",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0145",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0049",
    "pathPrefix": "/api/v1/resource-49",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0099",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0148",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0050",
    "pathPrefix": "/api/v1/resource-50",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0101",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0151",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0051",
    "pathPrefix": "/api/v1/resource-51",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0103",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0154",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0052",
    "pathPrefix": "/api/v1/resource-52",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0105",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0157",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0053",
    "pathPrefix": "/api/v1/resource-53",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0107",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0160",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0054",
    "pathPrefix": "/api/v1/resource-54",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0109",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0163",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0055",
    "pathPrefix": "/api/v1/resource-55",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0111",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0166",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0056",
    "pathPrefix": "/api/v1/resource-56",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0113",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0169",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0057",
    "pathPrefix": "/api/v1/resource-57",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0115",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0172",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0058",
    "pathPrefix": "/api/v1/resource-58",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0117",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0175",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0059",
    "pathPrefix": "/api/v1/resource-59",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0119",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0178",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0060",
    "pathPrefix": "/api/v1/resource-60",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0121",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0181",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0061",
    "pathPrefix": "/api/v1/resource-61",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0123",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0184",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0062",
    "pathPrefix": "/api/v1/resource-62",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0125",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0187",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0063",
    "pathPrefix": "/api/v1/resource-63",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0127",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0190",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0064",
    "pathPrefix": "/api/v1/resource-64",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0129",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0193",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0065",
    "pathPrefix": "/api/v1/resource-65",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0131",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0196",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0066",
    "pathPrefix": "/api/v1/resource-66",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0133",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0199",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0067",
    "pathPrefix": "/api/v1/resource-67",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0135",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0202",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0068",
    "pathPrefix": "/api/v1/resource-68",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0137",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0205",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0069",
    "pathPrefix": "/api/v1/resource-69",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0139",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0208",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0070",
    "pathPrefix": "/api/v1/resource-70",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0141",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0211",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0071",
    "pathPrefix": "/api/v1/resource-71",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0143",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0214",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0072",
    "pathPrefix": "/api/v1/resource-72",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0145",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0217",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0073",
    "pathPrefix": "/api/v1/resource-73",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0147",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0220",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0074",
    "pathPrefix": "/api/v1/resource-74",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0149",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0223",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0075",
    "pathPrefix": "/api/v1/resource-75",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0151",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0226",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0076",
    "pathPrefix": "/api/v1/resource-76",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0153",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0229",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0077",
    "pathPrefix": "/api/v1/resource-77",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0155",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0232",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0078",
    "pathPrefix": "/api/v1/resource-78",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0157",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0235",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0079",
    "pathPrefix": "/api/v1/resource-79",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0159",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0238",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0080",
    "pathPrefix": "/api/v1/resource-80",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0161",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0241",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0081",
    "pathPrefix": "/api/v1/resource-81",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0163",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0244",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0082",
    "pathPrefix": "/api/v1/resource-82",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0165",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0247",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0083",
    "pathPrefix": "/api/v1/resource-83",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0167",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0250",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0084",
    "pathPrefix": "/api/v1/resource-84",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0169",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0253",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0085",
    "pathPrefix": "/api/v1/resource-85",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0171",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0256",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0086",
    "pathPrefix": "/api/v1/resource-86",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0173",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0259",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0087",
    "pathPrefix": "/api/v1/resource-87",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0175",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0262",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0088",
    "pathPrefix": "/api/v1/resource-88",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0177",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0265",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0089",
    "pathPrefix": "/api/v1/resource-89",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0179",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0268",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0090",
    "pathPrefix": "/api/v1/resource-90",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0181",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0271",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0091",
    "pathPrefix": "/api/v1/resource-91",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0183",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0274",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0092",
    "pathPrefix": "/api/v1/resource-92",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0185",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0277",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0093",
    "pathPrefix": "/api/v1/resource-93",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0187",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0280",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0094",
    "pathPrefix": "/api/v1/resource-94",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0189",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0283",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0095",
    "pathPrefix": "/api/v1/resource-95",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0191",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0286",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0096",
    "pathPrefix": "/api/v1/resource-96",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0193",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0289",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0097",
    "pathPrefix": "/api/v1/resource-97",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0195",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0292",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0098",
    "pathPrefix": "/api/v1/resource-98",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0197",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0295",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0099",
    "pathPrefix": "/api/v1/resource-99",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0199",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0298",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0100",
    "pathPrefix": "/api/v1/resource-100",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0201",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0301",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0101",
    "pathPrefix": "/api/v1/resource-101",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0203",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0304",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0102",
    "pathPrefix": "/api/v1/resource-102",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0205",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0307",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0103",
    "pathPrefix": "/api/v1/resource-103",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0207",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0310",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0104",
    "pathPrefix": "/api/v1/resource-104",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0209",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0313",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0105",
    "pathPrefix": "/api/v1/resource-105",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0211",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0316",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0106",
    "pathPrefix": "/api/v1/resource-106",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0213",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0319",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0107",
    "pathPrefix": "/api/v1/resource-107",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0215",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0322",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0108",
    "pathPrefix": "/api/v1/resource-108",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0217",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0325",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0109",
    "pathPrefix": "/api/v1/resource-109",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0219",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0328",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0110",
    "pathPrefix": "/api/v1/resource-110",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0221",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0331",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0111",
    "pathPrefix": "/api/v1/resource-111",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0223",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0334",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0112",
    "pathPrefix": "/api/v1/resource-112",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0225",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0337",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0113",
    "pathPrefix": "/api/v1/resource-113",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0227",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0340",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0114",
    "pathPrefix": "/api/v1/resource-114",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0229",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0343",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0115",
    "pathPrefix": "/api/v1/resource-115",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0231",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0346",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0116",
    "pathPrefix": "/api/v1/resource-116",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0233",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0349",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0117",
    "pathPrefix": "/api/v1/resource-117",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0235",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0352",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0118",
    "pathPrefix": "/api/v1/resource-118",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0237",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0355",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0119",
    "pathPrefix": "/api/v1/resource-119",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0239",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0358",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0120",
    "pathPrefix": "/api/v1/resource-120",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0241",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0361",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0121",
    "pathPrefix": "/api/v1/resource-121",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0243",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0364",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0122",
    "pathPrefix": "/api/v1/resource-122",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0245",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0367",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0123",
    "pathPrefix": "/api/v1/resource-123",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0247",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0370",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0124",
    "pathPrefix": "/api/v1/resource-124",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0249",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0373",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0125",
    "pathPrefix": "/api/v1/resource-125",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0251",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0376",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0126",
    "pathPrefix": "/api/v1/resource-126",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0253",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0379",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0127",
    "pathPrefix": "/api/v1/resource-127",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0255",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0382",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0128",
    "pathPrefix": "/api/v1/resource-128",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0257",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0385",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0129",
    "pathPrefix": "/api/v1/resource-129",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0259",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0388",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0130",
    "pathPrefix": "/api/v1/resource-130",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0261",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0391",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0131",
    "pathPrefix": "/api/v1/resource-131",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0263",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0394",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0132",
    "pathPrefix": "/api/v1/resource-132",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0265",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0397",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0133",
    "pathPrefix": "/api/v1/resource-133",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0267",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0400",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0134",
    "pathPrefix": "/api/v1/resource-134",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0269",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0403",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0135",
    "pathPrefix": "/api/v1/resource-135",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0271",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0406",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0136",
    "pathPrefix": "/api/v1/resource-136",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0273",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0409",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0137",
    "pathPrefix": "/api/v1/resource-137",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0275",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0412",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0138",
    "pathPrefix": "/api/v1/resource-138",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0277",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0415",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0139",
    "pathPrefix": "/api/v1/resource-139",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0279",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0418",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0140",
    "pathPrefix": "/api/v1/resource-140",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0281",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0421",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0141",
    "pathPrefix": "/api/v1/resource-141",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0283",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0424",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0142",
    "pathPrefix": "/api/v1/resource-142",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0285",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0427",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0143",
    "pathPrefix": "/api/v1/resource-143",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0287",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0430",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0144",
    "pathPrefix": "/api/v1/resource-144",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0289",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0433",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0145",
    "pathPrefix": "/api/v1/resource-145",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0291",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0436",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0146",
    "pathPrefix": "/api/v1/resource-146",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0293",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0439",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0147",
    "pathPrefix": "/api/v1/resource-147",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0295",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0442",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0148",
    "pathPrefix": "/api/v1/resource-148",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0297",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0445",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0149",
    "pathPrefix": "/api/v1/resource-149",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0299",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0448",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0150",
    "pathPrefix": "/api/v1/resource-150",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0301",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0451",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0151",
    "pathPrefix": "/api/v1/resource-151",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0303",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0454",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0152",
    "pathPrefix": "/api/v1/resource-152",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0305",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0457",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0153",
    "pathPrefix": "/api/v1/resource-153",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0307",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0460",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0154",
    "pathPrefix": "/api/v1/resource-154",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0309",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0463",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0155",
    "pathPrefix": "/api/v1/resource-155",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0311",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0466",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0156",
    "pathPrefix": "/api/v1/resource-156",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0313",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0469",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0157",
    "pathPrefix": "/api/v1/resource-157",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0315",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0472",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0158",
    "pathPrefix": "/api/v1/resource-158",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0317",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0475",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0159",
    "pathPrefix": "/api/v1/resource-159",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0319",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0478",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0160",
    "pathPrefix": "/api/v1/resource-160",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0321",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0481",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0161",
    "pathPrefix": "/api/v1/resource-161",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0323",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0484",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0162",
    "pathPrefix": "/api/v1/resource-162",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0325",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0487",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0163",
    "pathPrefix": "/api/v1/resource-163",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0327",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0490",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0164",
    "pathPrefix": "/api/v1/resource-164",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0329",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0493",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0165",
    "pathPrefix": "/api/v1/resource-165",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0331",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0496",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0166",
    "pathPrefix": "/api/v1/resource-166",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0333",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0499",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0167",
    "pathPrefix": "/api/v1/resource-167",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0335",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0002",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0168",
    "pathPrefix": "/api/v1/resource-168",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0337",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0005",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0169",
    "pathPrefix": "/api/v1/resource-169",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0339",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0008",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0170",
    "pathPrefix": "/api/v1/resource-170",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0341",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0011",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0171",
    "pathPrefix": "/api/v1/resource-171",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0343",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0014",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0172",
    "pathPrefix": "/api/v1/resource-172",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0345",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0017",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0173",
    "pathPrefix": "/api/v1/resource-173",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0347",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0020",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0174",
    "pathPrefix": "/api/v1/resource-174",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0349",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0023",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0175",
    "pathPrefix": "/api/v1/resource-175",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0351",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0026",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0176",
    "pathPrefix": "/api/v1/resource-176",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0353",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0029",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0177",
    "pathPrefix": "/api/v1/resource-177",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0355",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0032",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0178",
    "pathPrefix": "/api/v1/resource-178",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0357",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0035",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0179",
    "pathPrefix": "/api/v1/resource-179",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0359",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0038",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0180",
    "pathPrefix": "/api/v1/resource-180",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0361",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0041",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0181",
    "pathPrefix": "/api/v1/resource-181",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0363",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0044",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0182",
    "pathPrefix": "/api/v1/resource-182",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0365",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0047",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0183",
    "pathPrefix": "/api/v1/resource-183",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0367",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0050",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0184",
    "pathPrefix": "/api/v1/resource-184",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0369",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0053",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0185",
    "pathPrefix": "/api/v1/resource-185",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0371",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0056",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0186",
    "pathPrefix": "/api/v1/resource-186",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0373",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0059",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0187",
    "pathPrefix": "/api/v1/resource-187",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0375",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0062",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0188",
    "pathPrefix": "/api/v1/resource-188",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0377",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0065",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0189",
    "pathPrefix": "/api/v1/resource-189",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0379",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0068",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0190",
    "pathPrefix": "/api/v1/resource-190",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0381",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0071",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0191",
    "pathPrefix": "/api/v1/resource-191",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0383",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0074",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0192",
    "pathPrefix": "/api/v1/resource-192",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0385",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0077",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0193",
    "pathPrefix": "/api/v1/resource-193",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0387",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0080",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0194",
    "pathPrefix": "/api/v1/resource-194",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0389",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0083",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0195",
    "pathPrefix": "/api/v1/resource-195",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0391",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0086",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0196",
    "pathPrefix": "/api/v1/resource-196",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0393",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0089",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0197",
    "pathPrefix": "/api/v1/resource-197",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0395",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0092",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0198",
    "pathPrefix": "/api/v1/resource-198",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0397",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0095",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0199",
    "pathPrefix": "/api/v1/resource-199",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0399",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0098",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0200",
    "pathPrefix": "/api/v1/resource-200",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0401",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0101",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0201",
    "pathPrefix": "/api/v1/resource-201",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0403",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0104",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0202",
    "pathPrefix": "/api/v1/resource-202",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0405",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0107",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0203",
    "pathPrefix": "/api/v1/resource-203",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0407",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0110",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0204",
    "pathPrefix": "/api/v1/resource-204",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0409",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0113",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0205",
    "pathPrefix": "/api/v1/resource-205",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0411",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0116",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0206",
    "pathPrefix": "/api/v1/resource-206",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0413",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0119",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0207",
    "pathPrefix": "/api/v1/resource-207",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0415",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0122",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0208",
    "pathPrefix": "/api/v1/resource-208",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0417",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0125",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0209",
    "pathPrefix": "/api/v1/resource-209",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0419",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0128",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0210",
    "pathPrefix": "/api/v1/resource-210",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0421",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0131",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0211",
    "pathPrefix": "/api/v1/resource-211",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0423",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0134",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0212",
    "pathPrefix": "/api/v1/resource-212",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0425",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0137",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0213",
    "pathPrefix": "/api/v1/resource-213",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0427",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0140",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0214",
    "pathPrefix": "/api/v1/resource-214",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0429",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0143",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0215",
    "pathPrefix": "/api/v1/resource-215",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0431",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0146",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0216",
    "pathPrefix": "/api/v1/resource-216",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0433",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0149",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0217",
    "pathPrefix": "/api/v1/resource-217",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0435",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0152",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0218",
    "pathPrefix": "/api/v1/resource-218",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0437",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0155",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0219",
    "pathPrefix": "/api/v1/resource-219",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0439",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0158",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0220",
    "pathPrefix": "/api/v1/resource-220",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0441",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0161",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0221",
    "pathPrefix": "/api/v1/resource-221",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0443",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0164",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0222",
    "pathPrefix": "/api/v1/resource-222",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0445",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0167",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0223",
    "pathPrefix": "/api/v1/resource-223",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0447",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0170",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0224",
    "pathPrefix": "/api/v1/resource-224",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0449",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0173",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0225",
    "pathPrefix": "/api/v1/resource-225",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0451",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0176",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0226",
    "pathPrefix": "/api/v1/resource-226",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0453",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0179",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0227",
    "pathPrefix": "/api/v1/resource-227",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0455",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0182",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0228",
    "pathPrefix": "/api/v1/resource-228",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0457",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0185",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0229",
    "pathPrefix": "/api/v1/resource-229",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0459",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0188",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0230",
    "pathPrefix": "/api/v1/resource-230",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0461",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0191",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0231",
    "pathPrefix": "/api/v1/resource-231",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0463",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0194",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0232",
    "pathPrefix": "/api/v1/resource-232",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0465",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0197",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0233",
    "pathPrefix": "/api/v1/resource-233",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0467",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0200",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0234",
    "pathPrefix": "/api/v1/resource-234",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0469",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0203",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0235",
    "pathPrefix": "/api/v1/resource-235",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0471",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0206",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0236",
    "pathPrefix": "/api/v1/resource-236",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0473",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0209",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0237",
    "pathPrefix": "/api/v1/resource-237",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0475",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0212",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0238",
    "pathPrefix": "/api/v1/resource-238",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0477",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0215",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0239",
    "pathPrefix": "/api/v1/resource-239",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0479",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0218",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0240",
    "pathPrefix": "/api/v1/resource-240",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0481",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0221",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0241",
    "pathPrefix": "/api/v1/resource-241",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0483",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0224",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0242",
    "pathPrefix": "/api/v1/resource-242",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0485",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0227",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0243",
    "pathPrefix": "/api/v1/resource-243",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0487",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0230",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0244",
    "pathPrefix": "/api/v1/resource-244",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0489",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0233",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0245",
    "pathPrefix": "/api/v1/resource-245",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0491",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0236",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0246",
    "pathPrefix": "/api/v1/resource-246",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0493",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0239",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0247",
    "pathPrefix": "/api/v1/resource-247",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0495",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0242",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0248",
    "pathPrefix": "/api/v1/resource-248",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0497",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0245",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0249",
    "pathPrefix": "/api/v1/resource-249",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0499",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0248",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0250",
    "pathPrefix": "/api/v1/resource-250",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0001",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0251",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0251",
    "pathPrefix": "/api/v1/resource-251",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0003",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0254",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0252",
    "pathPrefix": "/api/v1/resource-252",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0005",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0257",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0253",
    "pathPrefix": "/api/v1/resource-253",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0007",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0260",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0254",
    "pathPrefix": "/api/v1/resource-254",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0009",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0263",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0255",
    "pathPrefix": "/api/v1/resource-255",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0011",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0266",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0256",
    "pathPrefix": "/api/v1/resource-256",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0013",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0269",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0257",
    "pathPrefix": "/api/v1/resource-257",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0015",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0272",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0258",
    "pathPrefix": "/api/v1/resource-258",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0017",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0275",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0259",
    "pathPrefix": "/api/v1/resource-259",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0019",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0278",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0260",
    "pathPrefix": "/api/v1/resource-260",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0021",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0281",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0261",
    "pathPrefix": "/api/v1/resource-261",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0023",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0284",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0262",
    "pathPrefix": "/api/v1/resource-262",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0025",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0287",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0263",
    "pathPrefix": "/api/v1/resource-263",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0027",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0290",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0264",
    "pathPrefix": "/api/v1/resource-264",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0029",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0293",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0265",
    "pathPrefix": "/api/v1/resource-265",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0031",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0296",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0266",
    "pathPrefix": "/api/v1/resource-266",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0033",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0299",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0267",
    "pathPrefix": "/api/v1/resource-267",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0035",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0302",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0268",
    "pathPrefix": "/api/v1/resource-268",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0037",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0305",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0269",
    "pathPrefix": "/api/v1/resource-269",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0039",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0308",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0270",
    "pathPrefix": "/api/v1/resource-270",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0041",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0311",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0271",
    "pathPrefix": "/api/v1/resource-271",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0043",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0314",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0272",
    "pathPrefix": "/api/v1/resource-272",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0045",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0317",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0273",
    "pathPrefix": "/api/v1/resource-273",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0047",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0320",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0274",
    "pathPrefix": "/api/v1/resource-274",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0049",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0323",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0275",
    "pathPrefix": "/api/v1/resource-275",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0051",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0326",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0276",
    "pathPrefix": "/api/v1/resource-276",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0053",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0329",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0277",
    "pathPrefix": "/api/v1/resource-277",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0055",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0332",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0278",
    "pathPrefix": "/api/v1/resource-278",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0057",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0335",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0279",
    "pathPrefix": "/api/v1/resource-279",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0059",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0338",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0280",
    "pathPrefix": "/api/v1/resource-280",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0061",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0341",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0281",
    "pathPrefix": "/api/v1/resource-281",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0063",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0344",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0282",
    "pathPrefix": "/api/v1/resource-282",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0065",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0347",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0283",
    "pathPrefix": "/api/v1/resource-283",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0067",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0350",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0284",
    "pathPrefix": "/api/v1/resource-284",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0069",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0353",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0285",
    "pathPrefix": "/api/v1/resource-285",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0071",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0356",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0286",
    "pathPrefix": "/api/v1/resource-286",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0073",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0359",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0287",
    "pathPrefix": "/api/v1/resource-287",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0075",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0362",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0288",
    "pathPrefix": "/api/v1/resource-288",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0077",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0365",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0289",
    "pathPrefix": "/api/v1/resource-289",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0079",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0368",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0290",
    "pathPrefix": "/api/v1/resource-290",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0081",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0371",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0291",
    "pathPrefix": "/api/v1/resource-291",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0083",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0374",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0292",
    "pathPrefix": "/api/v1/resource-292",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0085",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0377",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0293",
    "pathPrefix": "/api/v1/resource-293",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0087",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0380",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0294",
    "pathPrefix": "/api/v1/resource-294",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0089",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0383",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0295",
    "pathPrefix": "/api/v1/resource-295",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0091",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0386",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0296",
    "pathPrefix": "/api/v1/resource-296",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0093",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0389",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0297",
    "pathPrefix": "/api/v1/resource-297",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0095",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0392",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0298",
    "pathPrefix": "/api/v1/resource-298",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0097",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0395",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0299",
    "pathPrefix": "/api/v1/resource-299",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0099",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0398",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0300",
    "pathPrefix": "/api/v1/resource-300",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0101",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0401",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0301",
    "pathPrefix": "/api/v1/resource-301",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0103",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0404",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0302",
    "pathPrefix": "/api/v1/resource-302",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0105",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0407",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0303",
    "pathPrefix": "/api/v1/resource-303",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0107",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0410",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0304",
    "pathPrefix": "/api/v1/resource-304",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0109",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0413",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0305",
    "pathPrefix": "/api/v1/resource-305",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0111",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0416",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0306",
    "pathPrefix": "/api/v1/resource-306",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0113",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0419",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0307",
    "pathPrefix": "/api/v1/resource-307",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0115",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0422",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0308",
    "pathPrefix": "/api/v1/resource-308",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0117",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0425",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0309",
    "pathPrefix": "/api/v1/resource-309",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0119",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0428",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0310",
    "pathPrefix": "/api/v1/resource-310",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0121",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0431",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0311",
    "pathPrefix": "/api/v1/resource-311",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0123",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0434",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0312",
    "pathPrefix": "/api/v1/resource-312",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0125",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0437",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0313",
    "pathPrefix": "/api/v1/resource-313",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0127",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0440",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0314",
    "pathPrefix": "/api/v1/resource-314",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0129",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0443",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0315",
    "pathPrefix": "/api/v1/resource-315",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0131",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0446",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0316",
    "pathPrefix": "/api/v1/resource-316",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0133",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0449",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0317",
    "pathPrefix": "/api/v1/resource-317",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0135",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0452",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0318",
    "pathPrefix": "/api/v1/resource-318",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0137",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0455",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0319",
    "pathPrefix": "/api/v1/resource-319",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0139",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0458",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0320",
    "pathPrefix": "/api/v1/resource-320",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0141",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0461",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0321",
    "pathPrefix": "/api/v1/resource-321",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0143",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0464",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0322",
    "pathPrefix": "/api/v1/resource-322",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0145",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0467",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0323",
    "pathPrefix": "/api/v1/resource-323",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0147",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0470",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0324",
    "pathPrefix": "/api/v1/resource-324",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0149",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0473",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0325",
    "pathPrefix": "/api/v1/resource-325",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0151",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0476",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0326",
    "pathPrefix": "/api/v1/resource-326",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0153",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0479",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0327",
    "pathPrefix": "/api/v1/resource-327",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0155",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0482",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0328",
    "pathPrefix": "/api/v1/resource-328",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0157",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0485",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0329",
    "pathPrefix": "/api/v1/resource-329",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0159",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0488",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0330",
    "pathPrefix": "/api/v1/resource-330",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0161",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0491",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0331",
    "pathPrefix": "/api/v1/resource-331",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0163",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0494",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0332",
    "pathPrefix": "/api/v1/resource-332",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0165",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0497",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0333",
    "pathPrefix": "/api/v1/resource-333",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0167",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0500",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0334",
    "pathPrefix": "/api/v1/resource-334",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0169",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0003",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0335",
    "pathPrefix": "/api/v1/resource-335",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0171",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0006",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0336",
    "pathPrefix": "/api/v1/resource-336",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0173",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0009",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0337",
    "pathPrefix": "/api/v1/resource-337",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0175",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0012",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0338",
    "pathPrefix": "/api/v1/resource-338",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0177",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0015",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0339",
    "pathPrefix": "/api/v1/resource-339",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0179",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0018",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0340",
    "pathPrefix": "/api/v1/resource-340",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0181",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0021",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0341",
    "pathPrefix": "/api/v1/resource-341",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0183",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0024",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0342",
    "pathPrefix": "/api/v1/resource-342",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0185",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0027",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0343",
    "pathPrefix": "/api/v1/resource-343",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0187",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0030",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0344",
    "pathPrefix": "/api/v1/resource-344",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0189",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0033",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0345",
    "pathPrefix": "/api/v1/resource-345",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0191",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0036",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0346",
    "pathPrefix": "/api/v1/resource-346",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0193",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0039",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0347",
    "pathPrefix": "/api/v1/resource-347",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0195",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0042",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0348",
    "pathPrefix": "/api/v1/resource-348",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0197",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0045",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0349",
    "pathPrefix": "/api/v1/resource-349",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0199",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0048",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0350",
    "pathPrefix": "/api/v1/resource-350",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0201",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0051",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0351",
    "pathPrefix": "/api/v1/resource-351",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0203",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0054",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0352",
    "pathPrefix": "/api/v1/resource-352",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0205",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0057",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0353",
    "pathPrefix": "/api/v1/resource-353",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0207",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0060",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0354",
    "pathPrefix": "/api/v1/resource-354",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0209",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0063",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0355",
    "pathPrefix": "/api/v1/resource-355",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0211",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0066",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0356",
    "pathPrefix": "/api/v1/resource-356",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0213",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0069",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0357",
    "pathPrefix": "/api/v1/resource-357",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0215",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0072",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0358",
    "pathPrefix": "/api/v1/resource-358",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0217",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0075",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0359",
    "pathPrefix": "/api/v1/resource-359",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0219",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0078",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0360",
    "pathPrefix": "/api/v1/resource-360",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0221",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0081",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0361",
    "pathPrefix": "/api/v1/resource-361",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0223",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0084",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0362",
    "pathPrefix": "/api/v1/resource-362",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0225",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0087",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0363",
    "pathPrefix": "/api/v1/resource-363",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0227",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0090",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0364",
    "pathPrefix": "/api/v1/resource-364",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0229",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0093",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0365",
    "pathPrefix": "/api/v1/resource-365",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0231",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0096",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0366",
    "pathPrefix": "/api/v1/resource-366",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0233",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0099",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0367",
    "pathPrefix": "/api/v1/resource-367",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0235",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0102",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0368",
    "pathPrefix": "/api/v1/resource-368",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0237",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0105",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0369",
    "pathPrefix": "/api/v1/resource-369",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0239",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0108",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0370",
    "pathPrefix": "/api/v1/resource-370",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0241",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0111",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0371",
    "pathPrefix": "/api/v1/resource-371",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0243",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0114",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0372",
    "pathPrefix": "/api/v1/resource-372",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0245",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0117",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0373",
    "pathPrefix": "/api/v1/resource-373",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0247",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0120",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0374",
    "pathPrefix": "/api/v1/resource-374",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0249",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0123",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0375",
    "pathPrefix": "/api/v1/resource-375",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0251",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0126",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0376",
    "pathPrefix": "/api/v1/resource-376",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0253",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0129",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0377",
    "pathPrefix": "/api/v1/resource-377",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0255",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0132",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0378",
    "pathPrefix": "/api/v1/resource-378",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0257",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0135",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0379",
    "pathPrefix": "/api/v1/resource-379",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0259",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0138",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0380",
    "pathPrefix": "/api/v1/resource-380",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0261",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0141",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0381",
    "pathPrefix": "/api/v1/resource-381",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0263",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0144",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0382",
    "pathPrefix": "/api/v1/resource-382",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0265",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0147",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0383",
    "pathPrefix": "/api/v1/resource-383",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0267",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0150",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0384",
    "pathPrefix": "/api/v1/resource-384",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0269",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0153",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0385",
    "pathPrefix": "/api/v1/resource-385",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0271",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0156",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0386",
    "pathPrefix": "/api/v1/resource-386",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0273",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0159",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0387",
    "pathPrefix": "/api/v1/resource-387",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0275",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0162",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0388",
    "pathPrefix": "/api/v1/resource-388",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0277",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0165",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0389",
    "pathPrefix": "/api/v1/resource-389",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0279",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0168",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0390",
    "pathPrefix": "/api/v1/resource-390",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0281",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0171",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0391",
    "pathPrefix": "/api/v1/resource-391",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0283",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0174",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0392",
    "pathPrefix": "/api/v1/resource-392",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0285",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0177",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0393",
    "pathPrefix": "/api/v1/resource-393",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0287",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0180",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0394",
    "pathPrefix": "/api/v1/resource-394",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0289",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0183",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0395",
    "pathPrefix": "/api/v1/resource-395",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0291",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0186",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0396",
    "pathPrefix": "/api/v1/resource-396",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0293",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0189",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0397",
    "pathPrefix": "/api/v1/resource-397",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0295",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0192",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0398",
    "pathPrefix": "/api/v1/resource-398",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0297",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0195",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0399",
    "pathPrefix": "/api/v1/resource-399",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0299",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0198",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0400",
    "pathPrefix": "/api/v1/resource-400",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0301",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0201",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0401",
    "pathPrefix": "/api/v1/resource-401",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0303",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0204",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0402",
    "pathPrefix": "/api/v1/resource-402",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0305",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0207",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0403",
    "pathPrefix": "/api/v1/resource-403",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0307",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0210",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0404",
    "pathPrefix": "/api/v1/resource-404",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0309",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0213",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0405",
    "pathPrefix": "/api/v1/resource-405",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0311",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0216",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0406",
    "pathPrefix": "/api/v1/resource-406",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0313",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0219",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0407",
    "pathPrefix": "/api/v1/resource-407",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0315",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0222",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0408",
    "pathPrefix": "/api/v1/resource-408",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0317",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0225",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0409",
    "pathPrefix": "/api/v1/resource-409",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0319",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0228",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0410",
    "pathPrefix": "/api/v1/resource-410",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0321",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0231",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0411",
    "pathPrefix": "/api/v1/resource-411",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0323",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0234",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0412",
    "pathPrefix": "/api/v1/resource-412",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0325",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0237",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0413",
    "pathPrefix": "/api/v1/resource-413",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0327",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0240",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0414",
    "pathPrefix": "/api/v1/resource-414",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0329",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0243",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0415",
    "pathPrefix": "/api/v1/resource-415",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0331",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0246",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0416",
    "pathPrefix": "/api/v1/resource-416",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0333",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0249",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0417",
    "pathPrefix": "/api/v1/resource-417",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0335",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0252",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0418",
    "pathPrefix": "/api/v1/resource-418",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0337",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0255",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0419",
    "pathPrefix": "/api/v1/resource-419",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0339",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0258",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0420",
    "pathPrefix": "/api/v1/resource-420",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0341",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0261",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0421",
    "pathPrefix": "/api/v1/resource-421",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0343",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0264",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0422",
    "pathPrefix": "/api/v1/resource-422",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0345",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0267",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0423",
    "pathPrefix": "/api/v1/resource-423",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0347",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0270",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0424",
    "pathPrefix": "/api/v1/resource-424",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0349",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0273",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0425",
    "pathPrefix": "/api/v1/resource-425",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0351",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0276",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0426",
    "pathPrefix": "/api/v1/resource-426",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0353",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0279",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0427",
    "pathPrefix": "/api/v1/resource-427",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0355",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0282",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0428",
    "pathPrefix": "/api/v1/resource-428",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0357",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0285",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0429",
    "pathPrefix": "/api/v1/resource-429",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0359",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0288",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0430",
    "pathPrefix": "/api/v1/resource-430",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0361",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0291",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0431",
    "pathPrefix": "/api/v1/resource-431",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0363",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0294",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0432",
    "pathPrefix": "/api/v1/resource-432",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0365",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0297",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0433",
    "pathPrefix": "/api/v1/resource-433",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0367",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0300",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0434",
    "pathPrefix": "/api/v1/resource-434",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0369",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0303",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0435",
    "pathPrefix": "/api/v1/resource-435",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0371",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0306",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0436",
    "pathPrefix": "/api/v1/resource-436",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0373",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0309",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0437",
    "pathPrefix": "/api/v1/resource-437",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0375",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0312",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0438",
    "pathPrefix": "/api/v1/resource-438",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0377",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0315",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0439",
    "pathPrefix": "/api/v1/resource-439",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0379",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0318",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0440",
    "pathPrefix": "/api/v1/resource-440",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0381",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0321",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0441",
    "pathPrefix": "/api/v1/resource-441",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0383",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0324",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0442",
    "pathPrefix": "/api/v1/resource-442",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0385",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0327",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0443",
    "pathPrefix": "/api/v1/resource-443",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0387",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0330",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0444",
    "pathPrefix": "/api/v1/resource-444",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0389",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0333",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0445",
    "pathPrefix": "/api/v1/resource-445",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0391",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0336",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0446",
    "pathPrefix": "/api/v1/resource-446",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0393",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0339",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0447",
    "pathPrefix": "/api/v1/resource-447",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0395",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0342",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0448",
    "pathPrefix": "/api/v1/resource-448",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0397",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0345",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0449",
    "pathPrefix": "/api/v1/resource-449",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0399",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0348",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0450",
    "pathPrefix": "/api/v1/resource-450",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0401",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0351",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0451",
    "pathPrefix": "/api/v1/resource-451",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0403",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0354",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0452",
    "pathPrefix": "/api/v1/resource-452",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0405",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0357",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0453",
    "pathPrefix": "/api/v1/resource-453",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0407",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0360",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0454",
    "pathPrefix": "/api/v1/resource-454",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0409",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0363",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0455",
    "pathPrefix": "/api/v1/resource-455",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0411",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0366",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0456",
    "pathPrefix": "/api/v1/resource-456",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0413",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0369",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0457",
    "pathPrefix": "/api/v1/resource-457",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0415",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0372",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0458",
    "pathPrefix": "/api/v1/resource-458",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0417",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0375",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0459",
    "pathPrefix": "/api/v1/resource-459",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0419",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0378",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0460",
    "pathPrefix": "/api/v1/resource-460",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0421",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0381",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0461",
    "pathPrefix": "/api/v1/resource-461",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0423",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0384",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0462",
    "pathPrefix": "/api/v1/resource-462",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0425",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0387",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0463",
    "pathPrefix": "/api/v1/resource-463",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0427",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0390",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0464",
    "pathPrefix": "/api/v1/resource-464",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0429",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0393",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0465",
    "pathPrefix": "/api/v1/resource-465",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0431",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0396",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0466",
    "pathPrefix": "/api/v1/resource-466",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0433",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0399",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0467",
    "pathPrefix": "/api/v1/resource-467",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0435",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0402",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0468",
    "pathPrefix": "/api/v1/resource-468",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0437",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0405",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0469",
    "pathPrefix": "/api/v1/resource-469",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0439",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0408",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0470",
    "pathPrefix": "/api/v1/resource-470",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0441",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0411",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0471",
    "pathPrefix": "/api/v1/resource-471",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0443",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0414",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0472",
    "pathPrefix": "/api/v1/resource-472",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0445",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0417",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0473",
    "pathPrefix": "/api/v1/resource-473",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0447",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0420",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0474",
    "pathPrefix": "/api/v1/resource-474",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0449",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0423",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0475",
    "pathPrefix": "/api/v1/resource-475",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0451",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0426",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0476",
    "pathPrefix": "/api/v1/resource-476",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0453",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0429",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0477",
    "pathPrefix": "/api/v1/resource-477",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0455",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0432",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0478",
    "pathPrefix": "/api/v1/resource-478",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0457",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0435",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0479",
    "pathPrefix": "/api/v1/resource-479",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0459",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0438",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0480",
    "pathPrefix": "/api/v1/resource-480",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0461",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0441",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0481",
    "pathPrefix": "/api/v1/resource-481",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0463",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0444",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0482",
    "pathPrefix": "/api/v1/resource-482",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0465",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0447",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0483",
    "pathPrefix": "/api/v1/resource-483",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0467",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0450",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0484",
    "pathPrefix": "/api/v1/resource-484",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0469",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0453",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0485",
    "pathPrefix": "/api/v1/resource-485",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0471",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0456",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0486",
    "pathPrefix": "/api/v1/resource-486",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0473",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0459",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0487",
    "pathPrefix": "/api/v1/resource-487",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0475",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0462",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0488",
    "pathPrefix": "/api/v1/resource-488",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0477",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0465",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0489",
    "pathPrefix": "/api/v1/resource-489",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0479",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0468",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0490",
    "pathPrefix": "/api/v1/resource-490",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0481",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0471",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0491",
    "pathPrefix": "/api/v1/resource-491",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0483",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0474",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0492",
    "pathPrefix": "/api/v1/resource-492",
    "upstreamCluster": "k8s-cluster-9",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0485",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0477",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0493",
    "pathPrefix": "/api/v1/resource-493",
    "upstreamCluster": "k8s-cluster-11",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0487",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0480",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0494",
    "pathPrefix": "/api/v1/resource-494",
    "upstreamCluster": "k8s-cluster-13",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0489",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0483",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0495",
    "pathPrefix": "/api/v1/resource-495",
    "upstreamCluster": "k8s-cluster-15",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0491",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0486",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0496",
    "pathPrefix": "/api/v1/resource-496",
    "upstreamCluster": "k8s-cluster-1",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0493",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0489",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0497",
    "pathPrefix": "/api/v1/resource-497",
    "upstreamCluster": "k8s-cluster-3",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0495",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0492",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0498",
    "pathPrefix": "/api/v1/resource-498",
    "upstreamCluster": "k8s-cluster-5",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0497",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0495",
        "weight": 20
      }
    ]
  },
  {
    "routeId": "ROUTE_MESH_0499",
    "pathPrefix": "/api/v1/resource-499",
    "upstreamCluster": "k8s-cluster-7",
    "timeoutMs": 2500,
    "retries": 3,
    "trafficSplit": [
      {
        "destination": "SVC_MESH_0499",
        "weight": 80
      },
      {
        "destination": "SVC_MESH_0498",
        "weight": 20
      }
    ]
  }
];
