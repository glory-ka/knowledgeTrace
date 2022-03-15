```javascript
const express = require('express');
const http = require('http');
```
...

```javascript
/**
 * return {function}
 * The function is meant to be used as callback for
 * the node built-in http module.
 */
const app = express();
```
...

```javascript
/**
 * =======================================================
 * express().listen() / app.listen is a shortcut to invoke
 * http.createServer()
 * link: https://expressjs.com/en/5x/api.html#app.listen
 * =======================================================
 *  app.listen = function () {
 *     var server = http.createServer(this)
 *     return server.listen.apply(server, arguments)
 *  }
 *
 */
const http_callback = http.createServer(app);
```
...

```javascript
/**
 * This only print app function codes
 * However, there seems to be other object referring to
 * function embedded as well. (e.g app.listen() )
 */
console.log(app.toString());
```
