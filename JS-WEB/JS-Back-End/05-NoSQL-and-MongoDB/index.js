const initDb = require('./dbConfig.js');
const Pet = require('./models/Pet.js');

initDb()
    .then(() => {
        // First way to create DB record.
        // let pet = new Pet({
        //     name: 'Robert',
        //     age: 2,
        //     kind: 'cat'
        // });

        // pet.save()
        //     .then(() => {
        //         console.log('Pet saved');
        //     })

        //Second way to create DB record

        Pet.create({
            name: 'Maddison',
            age: 12,
            kind: 'dog'
        })
            .then((pet) => {
                console.log('pet saved');
                console.log(pet);
            })
    });