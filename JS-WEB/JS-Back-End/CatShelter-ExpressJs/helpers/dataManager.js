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

let catEditer = (catId, catData) => {
    let publicFilesDir = path.join(__dirname, './../DB/cats.json');
    cats.map(x => {
        if (x.id == catId) {
            if (catData.name != x.name) {
                x.name = catData.name;
            }
            if (catData.description != x.description) {
                x.description = catData.description;
            }
            if (catData.breed != x.breed) {
                x.breed = catData.breed;
            }
            if (!catData.file == '') {
                x.file = catData.file;
            }
        }
    });
    console.log(cats);
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
    catEditer,
}

module.exports = result;