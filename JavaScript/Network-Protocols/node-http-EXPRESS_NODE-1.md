```javascrpt
var express = require('express');
var app = express();
var server = app.listen(3000);
```
```javascript=
app.use(express.static('docs'));
```

**create a websocket to detect new connections to the server**

##### __Load the socket.io library__
```javascript
var socket = require('socket.io');
```
##### __link the library to the Express server__
```javascript
var io = socket(server);
```
##### __Listen for "connection" and call the newConnection function__
```javascript
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
