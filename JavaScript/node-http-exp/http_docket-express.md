```javascript
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
```
...

```javascript
/**
 * app.use(express.static('.'));
 * The code bellow works well if we only want to see the index.html
 */
app.get('/index', (req, res)=>{
  res.sendFile(__dirname + /index.html);
});
```
...

```javascript
app.get('/', (req, res) => {
  console.log('First Entry');
  res.redirect(`/${455}`)
});
```
...

```javascript
app.get('/:room', (req, res) => {

  console.log('Second Entry');
  
  res.send(`This is the url: ${req.url}`);
});
```
...

```javascript
io.on('connection', socket => {

  console.log('Third Entry');

  socket.on('join-room', (roomId, userId) => {
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})
```
...

```javascript
server.listen(3000)
```
