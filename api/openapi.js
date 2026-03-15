export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    openapi: "3.0.0",
    info: {
      title: "ProfessionalDataAgent API",
      version: "1.0.0",
      description: "Enterprise-Grade Data Intelligence Platform",
      "x-erc8004-skills": [
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
      "x-erc8004-domains": [
        "cryptocurrency",
        "data-analytics",
        "blockchain",
        "defi"
      ]
    },
    servers: [
      {
        url: `https://${req.headers.host}`,
        description: "Production server"
      }
    ],
    paths: {
      "/health": {
        get: {
          summary: "Health check endpoint",
          tags: ["monitoring"],
          responses: {
            "200": {
              description: "Service is healthy",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: { type: "string" },
                      timestamp: { type: "string" }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/.well-known/agent.json": {
        get: {
          summary: "Agent metadata",
          tags: ["agent"],
          responses: {
            "200": {
              description: "Agent information",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      agentId: { type: "string" },
                      network: { type: "string" }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/mcp": {
        get: {
          summary: "MCP endpoint",
          tags: ["mcp"],
          responses: {
            "200": {
              description: "MCP protocol information"
            }
          }
        }
      }
    },
    tags: [
      {
        name: "monitoring",
        description: "Health and monitoring endpoints"
      },
      {
        name: "agent",
        description: "Agent metadata endpoints"
      },
      {
        name: "mcp",
        description: "Model Context Protocol endpoints"
      }
    ],
    components: {
      schemas: {
        AgentInfo: {
          type: "object",
          properties: {
            name: { type: "string" },
            agentId: { type: "string" },
            network: { type: "string" },
            capabilities: {
              type: "object",
              properties: {
                skills: {
                  type: "array",
                  items: { type: "string" }
                }
              }
            }
          }
        }
      }
    }
  });
}
