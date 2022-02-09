/**
 * source: https://nodejs.org/api/http.html#event-upgrade_1
*/


const http = require('http');
const net = require('net');
const { URL } = require('url');

const port_host = '3300';
const host_name = '::0';

/**
 * Create an HTTP tunneling proxy
 * In the current set up, this code is never reach,
 * because we make a CONNECT instead of a GET request
 * To execute the callback, open the server URL in a browser
*/
const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // option.path is doesn't seem to be relevant
  console.log(`option.path, inside listen(): ${req.url}`);

  res.end('okay');
});

proxy.on('connect', (req, clientSocket, head) => {

  // Connect to an origin server
  const { port, hostname } = new URL(`http://${req.url}`); //http://google.com:80

  const serverSocket = net.connect(port || 80, hostname, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');

    serverSocket.write(head); //pass client head to google.com
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});

// Now that proxy is running
proxy.listen(port_host, host_name, () => {

  // Make a request to a tunneling proxy
  const options = {
    port: port_host,
    host: host_name,
    method: 'CONNECT',
    path: 'www.google.com:80'
  };

  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head) => {
    console.log('got connected!');

    // console.log(res) -> dump the object content
    console.log('\nThis was sent by the server using socket.write() :')
    console.log(`${res.httpVersion}`)
    console.log(`${res.statusCode}`);
    console.log(`${res.rawHeaders}`);
    console.log(`${res.statusMessage} \n`);

    // Make a request over an HTTP tunnel
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');

    socket.on('data', (chunk) => {
      //console.log(`Start Here!!!: \n${chunk.toString()}`);
    });

    socket.on('end', () => {
      proxy.close();
    });

  });

});