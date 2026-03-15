export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    name: "ProfessionalDataAgent",
    description: "Enterprise-Grade Data Intelligence Platform | ERC-8004 Certified",
    agentId: "31323",
    network: "base",
    version: "1.0.0",
    services: [
      {
        type: "a2a",
        endpoint: "https://" + req.headers.host + "/api/agent",
        status: "active",
        protocol: "ERC-8004"
      },
      {
        type: "mcp",
        endpoint: "https://" + req.headers.host + "/mcp",
        status: "active",
        protocol: "MCP"
      },
      {
        type: "oasf",
        endpoint: "https://" + req.headers.host + "/openapi.json",
        status: "active",
        protocol: "OpenAPI"
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
        "hypothesis-generation",
        "predictive-analytics",
        "machine-learning",
        "data-visualization",
        "query-optimization",
        "cross-chain-analysis"
      ],
      tools: [
        "rest-api",
        "websocket",
        "graphql"
      ],
      domains: [
        "cryptocurrency",
        "data-analytics",
        "blockchain",
        "defi"
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
      uptime: "99.9%",
      responseTime: "30ms"
    }
  });
}
```

**KEY CHANGE:** Ganti backtick template literals jadi string concatenation (`+`) karena mungkin backtick bermasalah.

---

### **STEP 3: Commit changes**

**Scroll down → "Commit changes"**

---

### **STEP 4: Wait 1-2 minutes**

Auto-deploy akan jalan.

---

### **STEP 5: Test URL**
```
https://professionaldata-agent-tl6e.vercel.app/.well-known/agent.json
