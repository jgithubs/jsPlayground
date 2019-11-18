// 1:10:00
const http = require('http');

// This is an event emitter
const server = http.createServer();

server.on('connection', (socket) => {
  console.log('New Connection...');
})


server.listen(3000);
console.log('Listening on port 3000...');

