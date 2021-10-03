const fs = require('fs/promises');
const path = require('path');

let cats = require('./../DB/cats.json');
let breeds = require('./../DB/breeds.json');


let catSaver = (catObj) => {
    let publicFilesDir = path.join(__dirname, './../DB/cats.json');
    cats.push(catObj);
    let result = JSON.stringify(cats, null, 2);
    return fs.writeFile(publicFilesDir, result);
}

let breedSaver = (breed) => {
    let publicFilesDir = path.join(__dirname, './../DB/breeds.json');
    breeds.push(breed);
    let result = JSON.stringify(breeds, null, 2);
    return fs.writeFile(publicFilesDir, result);
}


let result = {
    catSaver,
    breedSaver,
}

module.exports = result;