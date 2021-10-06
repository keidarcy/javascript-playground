const http = require('http');
const httpServer = http.createServer();

// httpServer.on('connection', (connection) => {
//   // connection.localAddress
//   // connection.localPort
//   // connection.remoteAddress
//   // connection.remotePort
//   console.log('connected');
// });

httpServer.on('request', (req, res) => {
  console.log('req:', req);
  req.rawHeaders;
  req.res.write('get request');
  res.end();
});

httpServer.listen(3000, () => console.log('listening:3000'));
