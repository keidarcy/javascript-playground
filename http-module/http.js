const http = require('http');
const httpServer = http.createServer();

// httpServer.on('connection', (connection) => {
//   // connection.localAddress
//   // connection.localPort
//   // connection.remoteAddress
//   // connection.remotePort
//   console.log('connected');
// });

const getConnectionCount = () => {
  httpServer.getConnections((_err, count) => {
    console.log('count:', count);
  });
  setTimeout(getConnectionCount, 1000);
};

getConnectionCount();

httpServer.on('request', (req, res) => {
  // console.log('req:', req);
  // req.rawHeaders;
  res.write('get request');
  res.end();
});

httpServer.listen(3000, () => console.log('listening:3000'));
