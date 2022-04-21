```javascript
const WebSocketServer = require('ws');

let port = 4000;
```
```javascript
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: port })
```
```javascript
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
```
```javascript
console.log(`The WebSocket server is running on port ${port}`);
```
