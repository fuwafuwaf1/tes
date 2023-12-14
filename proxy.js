const http = require('http');
const httpProxy = require('http-proxy');

// Konfigurasi proxy server
const proxy = httpProxy.createProxyServer({});

// Buat server HTTP untuk menerima permintaan
const server = http.createServer((req, res) => {
  // Forward permintaan ke server tujuan (contoh: http://example.com)
  proxy.web(req, res, { target: 'http://example.com' });
});

// Dengarkan pada port tertentu (misalnya 2560)
const PORT = 2560;
server.listen(PORT, () => {
  console.log(`Proxy server berjalan di port ${PORT}`);
});
