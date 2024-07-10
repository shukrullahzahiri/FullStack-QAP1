const EventEmitter = require('events'); // Import the events module
class MyEmitter extends EventEmitter {} // Create a class that extends EventEmitter

const myEmitter = new MyEmitter(); // Instantiate the class

// Add an event listener for the 'event' event
myEmitter.on('event', () => {
    console.log('An event occurred!'); // Log message when event is emitted
});

// Emit the 'event' event
myEmitter.emit('event'); // Trigger the event
