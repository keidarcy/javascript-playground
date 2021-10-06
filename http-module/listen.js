const http = require('http');

const httpServer = http.createServer();

httpServer.on('request', (req, res) => res.end('ipv4 server'));

httpServer.on('listening', () => {
  console.log({
    port: httpServer.address().port,
    address: httpServer.address().address,
    family: httpServer.address().family,
  });
  if (httpServer.address().family === 'IPv6') {
    console.log(`http://[${httpServer.address().address}]:${httpServer.address().port}`);
  } else if (httpServer.address().family === 'IPv4') {
    console.log(`http://${httpServer.address().address}:${httpServer.address().port}`);
  }
});
httpServer.on('error', (err) => console.error({ err }));

// Listening on port 52428/ on ::
// :: ipv6 => 0.0.0.0 ipv4
// unspecified address

// httpServer.listen();
// httpServer.listen(0, '127.0.0.1');
// httpServer.listen(0, '::1');
// httpServer.listen(0, '127.0.0.1');
httpServer.listen(8888, '127.0.0.1');

const httpServerV6 = http.createServer();

httpServerV6.on('request', (req, res) => res.end('ipv6 server'));

httpServerV6.on('listening', () => {
  console.log({
    port: httpServerV6.address().port,
    address: httpServerV6.address().address,
    family: httpServerV6.address().family,
  });
  if (httpServerV6.address().family === 'IPv6') {
    console.log(
      `http://[${httpServerV6.address().address}]:${httpServerV6.address().port}`
    );
  } else if (httpServerV6.address().family === 'IPv4') {
    console.log(
      `http://${httpServerV6.address().address}:${httpServerV6.address().port}`
    );
  }
});
httpServerV6.on('error', (err) => console.error({ err }));

// httpServerV6.listen(0, '::1');
httpServerV6.listen(8888, '::1');
// httpServerV6.listen(8888, '127.0.0.1');
