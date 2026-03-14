export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    openapi: "3.0.0",
    info: {
      title: "ProfessionalDataAgent API",
      version: "1.0.0",
      description: "Enterprise-Grade Data Intelligence Platform"
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
          responses: {
            "200": {
              description: "Service is healthy"
            }
          }
        }
      },
      "/.well-known/agent.json": {
        get: {
          summary: "Agent metadata",
          responses: {
            "200": {
              description: "Agent information"
            }
          }
        }
      }
    }
  });
}