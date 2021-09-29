const fs = require('fs/promises');
const path = require('path');

const breedsDb = require('./../data/breeds.json');

const saveBreed = (breedObj) => {
    breedsDb.push(breedObj.breed);
    let result = JSON.stringify(breedsDb, null, 2);
    let filePath = path.normalize(path.join(__dirname, './../data/breeds.json'))
    return fs.writeFile(filePath, result);
}

const storageService = {
    saveBreed,
}

module.exports = storageService;