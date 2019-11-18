//   53:00,
//   59:00, Event Arguments
// 1:02:00
const EventEmitter  = require('events') // This is a class, not a function or value
const emitter       = new EventEmitter(); // This is an object

// Register a listener for the event
emitter.on('messageLogged', (eventArgs) => {
    console.log ("Listener", eventArgs);
})

// Raise and event
emitter.emit('messageLogged', {id:1, name:"Janet"}); // Raises an event/signaling called 'message Logged'
