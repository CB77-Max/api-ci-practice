const http = require('node:http');

http.createServer((req, res) => {
  const ok = req.method === 'GET' && req.url === '/health';
  res.writeHead(ok ? 200 : 404, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({ status: ok ? 'ok' : 'not found' }));
}).listen(3000, '127.0.0.1');
