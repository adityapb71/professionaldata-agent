module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    name: "ProfessionalDataAgent",
    protocol: "mcp",
    version: "1.0",
    capabilities: [
      "data-analysis",
      "pattern-recognition",
      "real-time-monitoring"
    ],
    tools: [
      {
        name: "analyze_data",
        description: "Analyze structured data",
        inputSchema: {
          type: "object",
          properties: {
            data: { type: "array" },
            options: { type: "object" }
          }
        }
      }
    ]
  });
};
