const eventBus = require('./eventBus.js');

let unsubscribe = eventBus.subscribe('arewethereyet', () => {
    console.log('Yeeeee');
})

eventBus.publish('arewethereyet');

// unsubscribe();