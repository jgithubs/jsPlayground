// 1. Get an interface to the library, https://www.youtube.com/watch?v=VShtPwEkDD0&list=PLMPcDMK7qdEPBbFgNuK-erkIktXrq2G6m&index=8&t=0s
const http = require('http')
const port = 3000 // 80,8080

// 2. Build a response function
// 3. Add   a response in the function
// http is responsible to respond to the server
const server = http.createServer(function(req, res) {
    // When a request is received, write the response
    res.write('Hello Node')
    res.end()
})

// 4. Create a server that will listen on the defined port
server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port '+port)
    }
})

// 5. Start the server in the terminal 'node server1.js'
// 6. Read  the port from the browser  'localhost:3000'.  We are using the defined port
