// Import the 'events' module to use its functionalities
const EventEmitter = require('events'); 

// Create a class 'MyEmitter' that extends EventEmitter
class MyEmitter extends EventEmitter {} 

// Instantiate the MyEmitter class to create an event emitter object
const myEmitter = new MyEmitter(); 

// Add an event listener for the 'event' event
// This listener will log a message when the 'event' event is emitted
myEmitter.on('event', () => {
    console.log('An event occurred!'); // Log message when event is emitted
});

// Emit the 'event' event to trigger the event listener
myEmitter.emit('event'); // Trigger the event
