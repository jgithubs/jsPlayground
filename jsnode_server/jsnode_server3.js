//   53:00,Event Module, Event,           http://www.youtube.com/watch?v=TlB_eWDSMt4&t=53m17s
//   59:00,Event Module, Event Arguments, http://www.youtube.com/watch?v=TlB_eWDSMt4&t=59m37s
// 1:02:00, Extending Event Emitter,      http://www.youtube.com/watch?v=TlB_eWDSMt4&t=1h02m46s
const EventEmitter  = require('events')   // This is a class, not a function or value
const emitter       = new EventEmitter(); // This is an object

// Register a listener for the event
emitter.on('messageLogged', (eventArgs) => {
    console.log ("Listener", eventArgs);
})

// Emit an event
// Passing arguments
emitter.emit('messageLogged', {id:1, name:"Janet"}); // Raises an event/signaling called 'message Logged'
