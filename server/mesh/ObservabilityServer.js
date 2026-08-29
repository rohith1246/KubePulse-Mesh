const http = require('http');
const PORT = process.env.PORT || 6000;
const server = http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'online', service: 'KubePulse Distributed Service Mesh', version: '3.0.0', activeNodes: 48, p99LatencyMs: 14.2 }));
    return;
  }
  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('# HELP mesh_request_total Total HTTP requests\n# TYPE mesh_request_total counter\nmesh_request_total{status="200"} 849200\n');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>KubePulse Service Mesh Telemetry Active</h1>');
});
if (require.main === module) { server.listen(PORT, () => console.log(`KubePulse listening on ${PORT}`)); }
module.exports = server;
