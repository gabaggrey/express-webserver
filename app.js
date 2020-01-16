const htt = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000; //assigned port number

const server = htt.createServer((req, res) => {
    res.statusCode = 200; //respond status ok
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n'); //output message in the browser

});

server.listen(port, hostname,  () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});