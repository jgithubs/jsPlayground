// HTTP Module w/Callback
// Later 'Express' that is built on top of HTTP
const http = require('http');

// This is an event emitter
// We work with the actual request not connection
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
}
);

server.listen(3000);
console.log('Listening on port 3000...');

