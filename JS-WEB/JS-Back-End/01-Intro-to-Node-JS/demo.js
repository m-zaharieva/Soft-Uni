const uniqid = require('uniqid');
const url = require('url');

const sum = require('./utils.js');

console.log(sum(2, 10));

let softuniUrl = 'https://softuni.bg/trainings/3496/js-back-end-september-2021/internal#lesson-31239';
let parseUrl = url.parse(softuniUrl);
console.log(parseUrl);