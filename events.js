// Testing Event-driven programming

const EventEmitter = require('events');

const customEmitter = new EventEmitter;

customEmitter.on('response', (name, id) => {
    console.log(`I am a response to ${name} number ${id}`);
});

customEmitter.on('response', () => {
    console.log("Normal response...");
})

customEmitter.emit('response');