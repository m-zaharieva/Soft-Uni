const fs = require('fs');
const promises = require('fs/promises');

// Sync 
// const text = fs.readFileSync('./index.html', 'utf8');

// Async
// const text = fs.readFile('./index.html', 'utf8', (err, data) => {
//     console.log(data);
// });

// Promises
const text = promises.readFile('./index.html', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

// Async Function
// async function asyncReadFile(path) {
//     let text = await promises.readFile(path, 'utf8');
//     console.log(text);
// }
// asyncReadFile('./index.html');

console.log('End');