var url = 'http://logger.io'

const EventEmitter  = require('events') // This is a class, not a function or value

class Logger extends EventEmitter {

    // Method
     log(message) {
        console.log(message);
    
        // Raise event inside class
        this.emit('messageLogged', {id:1, name:"Janet"}); // Raises an event/signaling called 'message Logged'
    }
}

module.exports = Logger; // Export the class