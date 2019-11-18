
// 1:02:00
const EventEmitter  = require('events') // This is a class, not a function or value
const emitter       = new EventEmitter(); // This is an object

// Register a listener for the event
emitter.on('messageLogged', (eventArgs) => {
    console.log ("Listener", eventArgs);
})

const log = require("./logger4")
log('message');