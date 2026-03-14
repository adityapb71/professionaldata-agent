export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Agent card response
  res.status(200).json({
    name: "ProfessionalDataAgent",
    description: "Enterprise-Grade Data Intelligence Platform | ERC-8004 Certified",
    agentId: "31323",
    network: "base",
    version: "1.0.0",
    services: [
      {
        type: "a2a",
        endpoint: `https://${req.headers.host}/api/agent`,
        status: "active",
        protocol: "ERC-8004"
      }
    ],
    capabilities: {
      skills: [
        "data-analysis",
        "pattern-recognition",
        "statistical-analysis",
        "api-integration",
        "real-time-monitoring",
        "report-generation",
        "automation",
        "blockchain-analysis",
        "strategic-planning",
        "hypothesis-generation"
      ],
      tools: [
        "rest-api",
        "websocket",
        "graphql"
      ]
    },
    trust: {
      reputation: true,
      staking: true,
      tee: true,
      payment: "x402"
    },
    metadata: {
      updated: new Date().toISOString(),
      uptime: "99.9%"
    }
  });
}