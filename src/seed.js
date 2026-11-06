// Fictional sample data for the Pipevora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Engr. Ibiso George",
      "role": "Operations Manager"
    },
    {
      "name": "Femi Olatunji",
      "role": "Network Engineer"
    },
    {
      "name": "Nkechi Agu",
      "role": "Network Engineer"
    },
    {
      "name": "Halima Idris",
      "role": "Data Analyst"
    },
    {
      "name": "Peter Okon",
      "role": "Commercial Auditor"
    }
  ],
  "items": [
    {
      "id": "PPV-701",
      "title": "DMA-07 night flow rising",
      "subtitle": "Residential · 2,400 connections",
      "group": "North service area",
      "metrics": [
        [
          "Min night flow",
          "112 m³/h"
        ],
        [
          "3 weeks ago",
          "79 m³/h"
        ],
        [
          "Change",
          "+42%"
        ],
        [
          "Pressure",
          "−0.6 bar"
        ]
      ],
      "flags": [
        {
          "label": "New leakage likely",
          "severity": "high",
          "confidence": 0.86,
          "explanation": "Minimum night flow rose 42% from 14 March while billed consumption stayed flat, and night pressure fell. This pattern usually indicates a new leak or burst.",
          "evidence": [
            [
              "Night flow",
              "79 → 112 m³/h",
              "DMA inlet meter"
            ],
            [
              "Billed consumption",
              "±2%",
              "Billing export"
            ],
            [
              "Night pressure",
              "−0.6 bar",
              "Pressure logger PL-07"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-702",
      "title": "DMA-03 high non-revenue water",
      "subtitle": "Mixed use · 1,850 connections",
      "group": "Central service area",
      "metrics": [
        [
          "Supplied (30d)",
          "96,000 m³"
        ],
        [
          "Billed",
          "52,000 m³"
        ],
        [
          "NRW",
          "46%"
        ],
        [
          "Meter age (avg)",
          "11 years"
        ]
      ],
      "flags": [
        {
          "label": "High loss zone",
          "severity": "medium",
          "confidence": 0.7,
          "explanation": "Nearly half of supplied water is unbilled. Night flows are moderate, suggesting meter under-registration and estimated billing may contribute alongside leakage.",
          "evidence": [
            [
              "NRW",
              "46%",
              "Water balance"
            ],
            [
              "Night flow share",
              "18% of daily",
              "DMA inlet meter"
            ],
            [
              "Estimated bills",
              "38% of accounts",
              "Billing export"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-703",
      "title": "Repeat bursts on Trunk Main T-2",
      "subtitle": "450mm AC pipe · 1.8 km",
      "group": "Central service area",
      "metrics": [
        [
          "Bursts (12 mo)",
          "5"
        ],
        [
          "Pipe age",
          "41 years"
        ],
        [
          "Pressure surges",
          "3 / week"
        ],
        [
          "Customers affected",
          "6,200"
        ]
      ],
      "flags": [
        {
          "label": "Asset at risk",
          "severity": "high",
          "confidence": 0.81,
          "explanation": "Five bursts in a year on an ageing asbestos-cement main, with frequent pressure surges at pump start-up. Surge control and condition assessment are suggested.",
          "evidence": [
            [
              "Burst history",
              "5 in 12 months",
              "Repair records"
            ],
            [
              "Pressure surges",
              "+2.1 bar spikes",
              "Pressure logger PL-02"
            ],
            [
              "Pipe material/age",
              "AC · 1985",
              "Asset register"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-704",
      "title": "Estate zone E-12 billing drop",
      "subtitle": "Private estate · 320 connections",
      "group": "South service area",
      "metrics": [
        [
          "Billed (30d)",
          "6,100 m³"
        ],
        [
          "Prior avg",
          "9,400 m³"
        ],
        [
          "Change",
          "−35%"
        ],
        [
          "Supply",
          "Unchanged"
        ]
      ],
      "flags": [
        {
          "label": "Billing shift",
          "severity": "medium",
          "confidence": 0.63,
          "explanation": "Billed volume fell sharply while supply did not. Possible causes include a meter-reading round missed, a bulk meter fault or new leakage. Confidence is reduced because there is no pressure data for this zone.",
          "evidence": [
            [
              "Billed volume",
              "−35%",
              "Billing export"
            ],
            [
              "Bulk meter supply",
              "±3%",
              "Bulk meter BM-12"
            ],
            [
              "Pressure data",
              "Not available",
              "Data coverage check"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-705",
      "title": "Repair R-221 impact",
      "subtitle": "DMA-05 · service pipe cluster",
      "group": "North service area",
      "metrics": [
        [
          "Night flow before",
          "64 m³/h"
        ],
        [
          "After",
          "33 m³/h"
        ],
        [
          "Recovered",
          "~740 m³/day"
        ],
        [
          "Repair date",
          "2 Apr"
        ]
      ],
      "flags": [
        {
          "label": "Repair verification",
          "severity": "low",
          "confidence": 0.88,
          "explanation": "Night flow fell by 31 m³/h after repair R-221, consistent with the leak being fixed. Confirming closes the job with a measured result.",
          "evidence": [
            [
              "Night flow",
              "64 → 33 m³/h",
              "DMA inlet meter"
            ],
            [
              "Repair",
              "R-221, 2 Apr",
              "Repair records"
            ],
            [
              "Other changes",
              "None found",
              "Operations log"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-706",
      "title": "Unmetered supply suspected",
      "subtitle": "Commercial strip · Bonny Street",
      "group": "South service area",
      "metrics": [
        [
          "Zone NRW",
          "39%"
        ],
        [
          "Commercial accounts",
          "14"
        ],
        [
          "Water-intensive uses",
          "3 car washes"
        ],
        [
          "Billed to them",
          "Low"
        ]
      ],
      "flags": [
        {
          "label": "Apparent loss",
          "severity": "low",
          "confidence": 0.52,
          "explanation": "Consumption billed to water-intensive businesses is unusually low for their type. This could mean faulty meters, estimated bills or unmetered use; it needs a field survey, not conclusions.",
          "evidence": [
            [
              "Billed (car washes)",
              "~4 m³/day each",
              "Billing export"
            ],
            [
              "Typical for type",
              "15–25 m³/day",
              "Benchmark"
            ],
            [
              "Meter test history",
              "None in 5 years",
              "Meter records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-707",
      "title": "Pressure too high at night",
      "subtitle": "DMA-09 · hillside zone",
      "group": "North service area",
      "metrics": [
        [
          "Night pressure",
          "7.8 bar"
        ],
        [
          "Target",
          "≤ 4.5 bar"
        ],
        [
          "Burst frequency",
          "2× network avg"
        ],
        [
          "PRV status",
          "Unknown"
        ]
      ],
      "flags": [
        {
          "label": "Pressure management",
          "severity": "medium",
          "confidence": 0.76,
          "explanation": "Night pressure is well above target, which drives leakage and bursts. The pressure-reducing valve may need servicing.",
          "evidence": [
            [
              "Night pressure",
              "7.8 bar",
              "Pressure logger PL-09"
            ],
            [
              "Burst rate",
              "2.1× average",
              "Repair records"
            ],
            [
              "PRV last serviced",
              "2022",
              "Maintenance records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-708",
      "title": "Data gap in DMA-11",
      "subtitle": "Inlet meter offline 19 days",
      "group": "Central service area",
      "metrics": [
        [
          "Meter offline",
          "19 days"
        ],
        [
          "Zone NRW",
          "Unknown"
        ],
        [
          "Complaints",
          "+12 low pressure"
        ],
        [
          "Last balance",
          "31% NRW"
        ]
      ],
      "flags": [
        {
          "label": "Data gap",
          "severity": "low",
          "confidence": 0.6,
          "explanation": "The inlet meter has been offline for 19 days, so loss cannot be measured. Low-pressure complaints have risen; restoring the meter would restore visibility.",
          "evidence": [
            [
              "Inlet meter",
              "No data since 22 Mar",
              "Telemetry"
            ],
            [
              "Complaints",
              "+12 in 3 weeks",
              "Customer service log"
            ],
            [
              "Last NRW",
              "31%",
              "Water balance (Feb)"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "PPV-709",
      "title": "DMA-02 stable",
      "subtitle": "Residential · 1,100 connections",
      "group": "South service area",
      "metrics": [
        [
          "NRW",
          "19%"
        ],
        [
          "Night flow",
          "Stable"
        ],
        [
          "Pressure",
          "On target"
        ],
        [
          "Status",
          "Normal"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
