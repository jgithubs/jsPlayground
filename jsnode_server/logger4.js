var url = 'http://logger.io'

const EventEmitter  = require('events') // This is a class, not a function or value
const emitter       = new EventEmitter(); // This is an object

function log(message) {
    console.log(message);

// Raise and event
emitter.emit('messageLogged', {id:1, name:"Janet"}); // Raises an event/signaling called 'message Logged'
}

//module.exports.log      = log; // Export the object for multiple methods
module.exports = log; // Export the function for one