const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
  console.log('First Entry');
  res.redirect(`/${455}`)
})

app.get('/:room', (req, res) => {
  console.log('Second Entry');
  res.send(`This is the url: ${req.url}`);
})

io.on('connection', socket => {
  console.log('Third Entry');
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(3000)