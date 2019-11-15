const http = require('http')
// 1. Import a file system library to read incomming data
const fs   = require('fs')
const port = 3000

// 2. Change the response function
const server = http.createServer(function(req,res) {
    // 3. Set the response <header>, <type of header>
    // 4. Sending a html doc, therefore, the FE will know how to read/parse it
    res.writeHead(200, {'Content-Type':'text/html'})
    // 5. Read the file using the new library.
    // 6. Send the file to the FE
    fs.readFile('index1.html', function(error,data){
        // 7. Check error that we cannot find the specified file
        if (error) {
            res.WriteHeade(404)
            res.write('Error, File not found')
        } else {
            // 8.  Data comes from the argument
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port '+port)
    }
})
