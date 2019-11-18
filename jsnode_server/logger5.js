var url = 'http://logger.io'

// Include the class
const EventEmitter  = require('events') // This is a class, not a function or value

// Class inherits from the class
class Logger extends EventEmitter {
    // Method (no longer a function)
     log(message) {
        console.log(message);
        // Raise event inside class
        this.emit('messageLogged', {id:1, name:"Janet"}); // Raises an event/signaling called 'message Logged'
    } // method
} // class

module.exports = Logger; // Export the class