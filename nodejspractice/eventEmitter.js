const EventEmitter = require("events");
const emitter = new EventEmitter();

// define an event listener for a custom event
emitter.on("customEvent", (message)=>{
    console.log(`Received message ${message}`);
});

// Emit the  custom event
emitter.emit("customEvent",'Hello world');