
// Event Arguments
const EventEmitter  = require('events')   // This is a class, not a function or value

// Custom Class that extends event emitter
const Logger = require("./logger5")
const logger = new Logger();

// Register a listener for the event
logger.on('messageLogged', (eventArgs) => {
    console.log ("Listener", eventArgs);
})

logger.log('message');