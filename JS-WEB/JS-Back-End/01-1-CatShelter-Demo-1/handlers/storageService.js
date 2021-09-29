const fs = require('fs/promises');
const path = require('path');

const breedsDb = require('./../data/breeds.json');
const catsDB = require('./../data/cats.json');

const saveBreed = (breedObj) => {
    if (!breedsDb.includes(breedObj.breed)) {
        breedsDb.push(breedObj.breed);
    } else {
        console.error('This breed is already added to the list!');
    }
    let result = JSON.stringify(breedsDb, null, 2);
    let filePath = path.normalize(path.join(__dirname, './../data/breeds.json'))
    return fs.writeFile(filePath, result);
}

const saveCat = (catObj) => {
    catsDB.push(catObj);
    let result = JSON.stringify(catsDB, null, 2);
    let filePath = path.normalize(path.join(__dirname, './../data/cats.json'))
    return fs.writeFile(filePath, result);
}

const storageService = {
    saveBreed,
    saveCat
}

module.exports = storageService;