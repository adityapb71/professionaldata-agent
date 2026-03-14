export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: '99.9%',
    service: 'ProfessionalDataAgent'
  });
}