const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log("Application Started!");
});

emitter.on('data', (name, age) => {
    console.log(`Data received: ${name}, ${age}`)
});

emitter.on('error', (err) => {
    if (err) {
        console.error('Error occured:', err);
    } else {
        console.log("Nothing is wrong.");
    }
});

emitter.emit('start')
emitter.emit('data', "Eleng", "21")
emitter.emit('error')

