```javascrpt
var express = require('express');
var app = express();
var server = app.listen(3000);
```
```javascript=
app.use(express.static('docs'));
```

**create a websocket to detect new connections to the server**
```javascript
//Load the socket.io library
var socket = require('socket.io');
```
```javascript
//link the library to the Express server
var io = socket(server);
```
```javascript
// Listen for "connection" and call the newConnection function
io.sockets.on('connection', newConnection);
```
```javascript
function newConnection(socket)
{
    //Print socket id
    console.log('New Connection: ' + socket.id);
    
    // listen for "text" connection and call MessageReceivedd function
    socket.on('text', MessageReceived);
    function MessageReceived(data)
    {
        //sent a broadcast to all connected session but the sending session
        socket.broadcast.emit('text', data);
    }
}
```
