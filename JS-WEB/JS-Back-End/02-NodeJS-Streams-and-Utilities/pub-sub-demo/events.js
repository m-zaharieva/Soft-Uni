const events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('customEvent', (first, second) => {
    console.log('First: ', first);
    console.log('Second: ', second);
});

eventEmitter.emit('customEvent', 'Pesho', 'Gosho');