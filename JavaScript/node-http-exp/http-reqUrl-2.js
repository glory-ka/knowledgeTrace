const http = require('http');
const host = '::0';
const port = '5000';

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Successful Connection');

    console.log(`URL paths: ${req.url}`);
};

const server = http.createServer(requestListener);

server.listen(port, host, ()=>{

    const options = {
        hostname: host,
        port: port,
        path: '/doesnt-Matter-For-This-Test',
        method: 'GET'
    };

    // don't need a callback
    const req = http.request(options, res =>{
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', data => {
            process.stdout.write(`Data Received: ${data}`);
        });
    } );

    req.on('error', err => {
        console.error(err);
    })

    req.end();
});