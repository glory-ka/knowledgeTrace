```javascript

/** source: https://nodejs.org/api/http.html#event-upgrade_1
 *  We use the CONNECT method to turn a http server into a proxy
 */

const http = require('http');
const net = require('net');
const { URL } = require('url');

/** Create an HTTP tunneling proxy */
const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

/** This is called after the client, below proxy.listen(...), sends a CONNECT request */
proxy.on('connect', (req, clientSocket, head)/** (req, socket, head )*/ => { 

	/** Connect to an origin server
	 *  req.url returns: 
	 */
	const { port, hostname } = new URL(`http://${req.url}`);

	const serverSocket = net.connect(port || 80, hostname, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');

    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);

  });
});

/** Now that proxy is running 
 * Here, the callback plays the role of the client side.
 * If the class was on a different context/origin we would have
 * to find a to bypass the CORS mechanism.
 */
proxy.listen(1337, '127.0.0.1', () => {

  /** Make a request to a tunneling proxy */
  const options = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80'
  };

  const req = http.request(options);
  req.end();

  /** This happens after the server responds to the request above.
	* We started the http connection in CONNECT Mode, subprotocol. 
	*/
  req.on('connect', (res, socket, head) => {

    console.log('got connected!');

    /** Make a request over an HTTP tunnel */
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');

    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });

    socket.on('end', () => {
      proxy.close();
    });

  });

});
```