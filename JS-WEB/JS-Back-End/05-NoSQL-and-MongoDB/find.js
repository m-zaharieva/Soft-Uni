const initDb = require('./dbConfig.js');
const Pet = require('./models/Pet.js');

initDb();

// Pet.find()
//     .then(pets => {
//         console.log(pets);
//         pets.forEach(p => {
//             // console.log(`${p.name} says ${p.makeSound()}`);
//             console.log(p.pasport);
//         });
//     });

// Pet.findOne({name: 'Robert'})
//     .then(pet => {
//         console.log(pet);
//     })

Pet.updateOne({id: '615ef1a3176a9e0e90b0c553'}, {$set: {home: 'Plovdiv'}}, {strict: false})
    .then(res => {
        console.log('updated');
        console.log(res);
    })