// Site copy for Pipevora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Pipevora",
  "tagline": "Find water losses. Focus repair crews.",
  "categories": [
    "AI",
    "WaterTech",
    "Infrastructure Analytics"
  ],
  "about": "Pipevora helps water operators identify where losses may be occurring. Its AI brings operational records together to guide inspections and measure what changes after repairs.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#06283d\"/><path d=\"M5 12h9a4 4 0 0 1 4 4v1\" fill=\"none\" stroke=\"#5ec8f2\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M18 21c0 2-1.4 3.5-3 3.5S12 23 12 21c0-1.6 3-5 3-5s3 3.4 3 5z\" fill=\"#2ee6d6\"/><path d=\"M22 12h5\" stroke=\"#5ec8f2\" stroke-width=\"3\" stroke-linecap=\"round\"/>",
  "words": {
    "records": "loss zones",
    "decider": "utility engineers",
    "sources": "pressure, flow, billing and repair records",
    "model": "Zone-level models compare supplied and billed volumes, detect unusual night flows and pressure changes, and rank suspected loss zones with confidence reduced where data is missing.",
    "store": "Amazon Timestream"
  },
  "hero": {
    "eyebrow": "Water loss analytics",
    "before": "Give every leak investigation ",
    "em": "a stronger starting point",
    "after": ".",
    "points": [
      "Pressure, flow, billing and repairs in one place",
      "Suspected loss zones ranked for inspection",
      "Data gaps shown, not hidden"
    ],
    "floatTitle": "Night flow up 42%",
    "floatText": "DMA-07 · since 14 March"
  },
  "problem": {
    "title": "Water produced is not water billed, and nobody can say where it went.",
    "text": "Utilities lose water to leaks, bursts, meter errors and unbilled connections. With few sensors, ageing pipes and patchy repair records, broad inspection programmes are slow and expensive, and crews are often sent to the wrong street.",
    "fragments": [
      "Production records in one office, billing in another",
      "Night flows nobody looks at",
      "Repairs logged on paper, if at all",
      "Inspection crews chasing complaints, not losses"
    ]
  },
  "solution": {
    "title": "Bring the records together. Rank where to look.",
    "text": "Pipevora combines available pressure, flow, billing and repair records to rank suspected loss zones, detect unusual changes and recommend inspection areas, showing clearly where data gaps reduce confidence.",
    "capabilities": [
      {
        "title": "Water balance by zone",
        "text": "Compares water supplied to each zone with water billed, and tracks the gap over time.",
        "demoLabel": "DMA-07 non-revenue",
        "demoValue": "46% of supply"
      },
      {
        "title": "Change detection",
        "text": "Spots rising night flows, pressure drops and billing shifts that suggest new losses.",
        "demoLabel": "Night flow",
        "demoValue": "+42% in 3 weeks"
      },
      {
        "title": "Repair impact",
        "text": "Measures what changed after each repair, so crews can see which work paid off.",
        "demoLabel": "After repair R-221",
        "demoValue": "−31 m³/h night flow"
      }
    ]
  },
  "stepsTitle": "From fragmented records to focused crews.",
  "steps": [
    [
      "Connect",
      "Load production and zone meter data, pressure loggers, billing exports and repair records."
    ],
    [
      "Balance",
      "Pipevora builds a water balance for each zone and learns normal flow and pressure patterns."
    ],
    [
      "Rank",
      "Suspected loss zones are ranked by likely volume and confidence, with data gaps marked."
    ],
    [
      "Inspect",
      "Engineers dispatch crews, record what they find, and Pipevora measures the result."
    ]
  ],
  "audiencesTitle": "For the operators who keep water flowing.",
  "audiences": [
    {
      "title": "State water corporations",
      "text": "Prioritise leak detection across large, ageing networks.",
      "outcome": "Crews sent to likely losses"
    },
    {
      "title": "Industrial park utilities",
      "text": "Account for every cubic metre supplied to tenants.",
      "outcome": "Tighter water balance"
    },
    {
      "title": "Private estate water operators",
      "text": "Find leaks and billing gaps across estate networks.",
      "outcome": "Lower losses"
    },
    {
      "title": "Bulk water concessionaires",
      "text": "Show performance on loss reduction with evidence.",
      "outcome": "Measured results"
    }
  ],
  "publicSector": {
    "title": "Prioritise leak investigations and track repair outcomes.",
    "text": "Pipevora helps public water providers decide where to investigate first and shows what changed after each repair, building evidence for investment and performance reporting.",
    "points": [
      "Ranked inspection areas for limited crews",
      "Before-and-after measurement for every repair",
      "Water balance reporting by zone",
      "Engineers record every decision and finding"
    ]
  },
  "ai": {
    "title": "The model ranks where to look. Engineers find what is there.",
    "intro": "Loss can come from leaks, faulty meters, unbilled use or data errors. Pipevora points crews in a direction and is honest about how sure it is.",
    "does": [
      "Builds water balances by zone",
      "Detects unusual night flows and pressure changes",
      "Ranks suspected loss zones for inspection",
      "Measures changes after repairs"
    ],
    "never": [
      "Accuses customers of illegal connections",
      "Disconnects supply or issues bills",
      "Overstates confidence where data is missing",
      "Changes billing or meter records"
    ]
  },
  "pricing": {
    "model": "Annual licence per service zone, with optional sensor integration support.",
    "tiers": [
      {
        "name": "Zone",
        "summary": "For estates and small networks.",
        "price": "₦1.2m",
        "unit": "/ zone / year",
        "features": [
          "Water balance by zone",
          "Change detection",
          "Repair tracking",
          "5 user seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Network",
        "summary": "For utilities with many zones.",
        "price": "₦900k",
        "unit": "/ zone / year",
        "features": [
          "From 20 zones",
          "Everything in Zone",
          "Ranked inspection plans",
          "Repair impact reports",
          "Unlimited seats"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Utility",
        "summary": "For state corporations and concessions.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Any number of zones",
          "Sensor integration support",
          "GIS and billing integration",
          "Performance reporting"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Tamuno Briggs",
      "role": "Founder/CEO",
      "initials": "TB",
      "bio": "Water engineer with utility rehabilitation experience.",
      "focus": [
        "Water engineering",
        "Utility rehabilitation",
        "Partnerships"
      ]
    },
    {
      "name": "Yetunde Olaniran",
      "role": "Co-founder",
      "initials": "YO",
      "bio": "Infrastructure programme manager.",
      "focus": [
        "Programme management",
        "Infrastructure",
        "Delivery"
      ]
    },
    {
      "name": "Musa Shehu",
      "role": "CTO",
      "initials": "MS",
      "bio": "Data engineer and ML specialist focused on network monitoring.",
      "focus": [
        "Data engineering",
        "Network monitoring",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Do we need to install sensors?",
      "Not to start. Pipevora works with whatever exists, such as production meters, a few pressure loggers and billing data. Where data is thin, it says so and suggests where a sensor would help most."
    ],
    [
      "What is a district metered area?",
      "A section of network with metered inflows, so supply can be compared with consumption. Pipevora works best with DMAs but can also use looser zones."
    ],
    [
      "Does it find individual leaks?",
      "It narrows the search to zones and streets. Crews then use acoustic or other field methods to pinpoint leaks."
    ],
    [
      "Is Pipevora a live product?",
      "Not yet. Pipevora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Pipevora flags, ranks and explains. Utility engineers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Pipevora exists",
    "manifesto": "Treated water costs money and energy to produce. When it leaks away underground, families queue at boreholes and utilities lose the revenue to fix the pipes. We want every repair crew to start closer to the leak.",
    "purpose": "Help water operators find where losses may be occurring, and prove what repairs achieve.",
    "why": "Non-revenue water drains utility finances and leaves customers with intermittent supply. Focusing scarce crews where losses are most likely is one of the fastest ways to recover water and revenue.",
    "stakesTitle": "The scale of lost water.",
    "stats": [
      {
        "value": 126,
        "suffix": "bn m³",
        "label": "Estimated non-revenue water lost worldwide each year.",
        "source": "Liemberger & Wyatt, via The Source (IWA)",
        "url": "https://thesourcemagazine.org/bursting-at-the-seams-new-study-highlights-the-realities-of-water-loss/"
      },
      {
        "value": 39,
        "prefix": "$",
        "suffix": "bn",
        "label": "Estimated annual value of that lost water, at a conservative 31 cents per cubic metre.",
        "source": "Liemberger & Wyatt, via The Source (IWA)",
        "url": "https://thesourcemagazine.org/bursting-at-the-seams-new-study-highlights-the-realities-of-water-loss/"
      },
      {
        "value": 48.6,
        "dec": 1,
        "suffix": "bn m³",
        "label": "The World Bank’s earlier, narrower estimate of annual non-revenue water.",
        "source": "World Bank, 2006",
        "url": "https://documents1.worldbank.org/curated/en/385761468330326484/pdf/394050Reducing1e0water0WSS81PUBLIC1.pdf"
      }
    ],
    "changeTitle": "From chasing complaints to targeting losses.",
    "before": [
      "Production and billing in separate systems",
      "Crews dispatched only after visible bursts",
      "Repairs that are never measured",
      "Loss figures reported once a year"
    ],
    "after": [
      "A water balance for every zone",
      "Hidden losses flagged from night flows",
      "Before-and-after results for each repair",
      "Loss tracked weekly, by zone"
    ],
    "principlesTitle": "What we believe about water data.",
    "principles": [
      [
        "Honest about gaps",
        "Missing data lowers confidence, and we show it."
      ],
      [
        "Measure the repair",
        "Success is water recovered, not jobs closed."
      ],
      [
        "Engineers decide",
        "Crews and engineers find causes; models point the way."
      ],
      [
        "Customers are not suspects",
        "Apparent losses have many causes; no one is accused."
      ],
      [
        "Start with what exists",
        "Useful from day one, better with every sensor added."
      ],
      [
        "Water is public value",
        "Every cubic metre saved serves someone."
      ]
    ],
    "letterTitle": "Why we are building Pipevora.",
    "letter": [
      "Tamuno worked on utility rehabilitation projects where crews dug up the wrong streets and new pipes leaked within a year because nobody measured what changed. The data that could have helped existed, scattered across offices.",
      "Yetunde managed infrastructure programmes and saw how hard it was to prove results. Musa had built monitoring systems for networks and knew how much could be learned from a few well-placed meters.",
      "Pipevora is our way of putting those records to work: ranking where to look, being honest about uncertainty, and showing every crew the difference their repairs make."
    ],
    "visionTitle": "Where Pipevora is going.",
    "visionIntro": "From ranked inspections to a network that reports its own health.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with water operators."
      },
      {
        "stage": "Next",
        "title": "Zone pilots",
        "text": "Building water balances and inspection rankings for a few DMAs."
      },
      {
        "stage": "Then",
        "title": "Network rollout",
        "text": "Weekly loss ranking and repair tracking across the network."
      },
      {
        "stage": "Later",
        "title": "Smart investment",
        "text": "Evidence that guides sensor placement and pipe replacement budgets."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Loss zone review",
    "subtitle": "Suspected water loss zones across a fictional network, ranked for inspection.",
    "itemNoun": "loss zone",
    "itemNounPlural": "loss zones",
    "groupLabel": "service area",
    "queueTitle": "Inspection queue",
    "humanNote": "Rankings guide inspections. Engineers decide where crews go.",
    "decisions": {
      "confirm": "Dispatch crew",
      "dismiss": "Explained — close",
      "escalate": "Escalate to operations"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Operations Manager",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Network Engineer",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Data Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Commercial Auditor",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which loss zones need review first?",
      "Summarise the review status",
      "Show North service area",
      "Explain PPV-704"
    ],
    "refuse": "\\b(disconnect|cut (off|their)|illegal|thie[fv]|steal|penal|fine (the|this)|prosecut)",
    "refuseText": "Pipevora can show the data behind a suspected loss, but disconnections, penalties and conclusions about customers belong to authorised staff and due process.",
    "refuseExamples": [
      "Disconnect the customers in DMA-07",
      "Who has an illegal connection on Bonny Street?",
      "Fine the estate behind PPV-706"
    ]
  },
  "slug": "pipevora",
  "url": "https://www.pipevora.com",
  "email": "hello@pipevora.com",
  "stepsNote": "Pipevora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every loss zone is confirmed, dismissed or escalated by utility engineers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the pressure, flow, billing and repair records behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Pipevora would run in production: ingestion of pressure, flow, billing and repair records, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for pressure, flow, billing and repair records."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Zone-level models compare supplied and billed volumes, detect unusual night flows and pressure changes, and rank suspected loss zones with confidence reduced where data is missing."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon Timestream",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Pipevora with your own team.",
    "text": "We are looking for a small number of early partners to shape Pipevora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
