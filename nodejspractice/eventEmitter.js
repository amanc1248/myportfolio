const EventEmitter = require("events");
const util = require("util");
const emitter = new EventEmitter();

// define an event listener for a custom event
emitter.on("customEvent", (message) => {
  console.log(`Received message ${message}`);
});

// Emit the  custom event
setTimeout(() => emitter.emit("customEvent", "Hello world"), 3000);

// using util 
var Person = function(name){
    this.name = name;
};
util.inherits(Person, EventEmitter);
var james = new Person("james");
var ryu = new Person("ryu");
var mary = new Person("mary");
var people = [james, ryu, mary];
people.forEach((person)=>{
    person.on("speak",(message)=>{
        console.log(`${person.name} said: ${message}`);
    })
});
james.emit("speak","I am going to home")