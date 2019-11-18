// https://www.youtube.com/watch?v=UMKS6su8HQc&list=PLMPcDMK7qdEMASFZR_XpoczglZPxd-X0d&index=12&t=490s
// https://www.youtube.com/watch?v=tiMLxUKrB-g, academind, routing
const http   = require('http');

// Unamous function
const server = http.createServer(function(req,res) {

    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Orgin', '*');
    res.writeHead(200);

    let dataObj = {id:123, name:"Bob", email:"bob@work.org"};
    let data = JSON.stringify(dataObj);

    // Last command
    res.end(data);
});

server.listen(1234, function(){
    console.log('Listening on port 1234');
})