```javascript
const http = require('http');
const host = '0:0:0:0:0:0:0:0';
const port = '4000'
```
...

```javascript
// Reached regardless of the path in the url
// localhost:4000/<any>/<any>/...
const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Successful connection');
    console.log(req.url);
}
```
...

```javascript
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`server listening on port ${port}`);
});
```
