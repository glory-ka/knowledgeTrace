const http = require('http');
const express = require('express');

const socket_IO1 = require('socket.io');
const socket_IO2 = require('socket.io');

// [Object Object] -> instance of an Object
console.log(socket_IO().toString());


/**
 * Seems it takes a class or subclass of the net.Server() object
 * This also put the socket.io source files in the root of the serve
 */
const socket1 = socket_IO1(http);

/**
 * return {function}, see console.log(app.toString)
 * Function is loaded with other functions (app.functionNAme = () =>{//code})
 */
const app = express();

/**
 *  app.listen = function () {
 *     var server = http.createServer(this)
 *     return server.listen.apply(server, arguments)
 *  }
 * RETURN n.Server() object
 */
const server = app.listen(3000);
const socket2 = socket_IO2(server);

