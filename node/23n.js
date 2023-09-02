// Event Module
// Node.js has a build-in module, called "Events"
// where you can create-, fire-, and listen for- your owwn events.

//example 1- registering for the event to be fired only one time using once.
//example 2- create an event emitter instance and register a couple of callbacks
//example 3- registerng for event with callback parameters

const EventEmitter = require("events");
// const event = require("evennts");
// const event = new event.EventEmitter();

const event = new EventEmitter();
// event.on('sayMyName', () => {
//     console.log("your name is nannu");
// })

// event.on('sayMyName', () => {
//     console.log("your name is gunnu");
// })

// event.on('sayMyName', () => {
//     console.log("your name is nandani");
// })

// event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
console.log(`status code is ${sc} and the page is ${msg} `)
})
event.emit("checkPage", 200, "ok");

// the concept is quite simple: emitter object emit named events that cause previously registered listeners to be called. so, an emitter object basically has two main features:

// Emitting name events. 
// Registering and unRegistering listener functions.