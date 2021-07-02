let cat = {name: 'Tom', age: 3};


// Object freeze
console.log(Object.getOwnPropertyDescriptors(cat));
// value: ..
// writable: true;
// enumerable: true;
// configurable: true;

Object.freeze(cat);

console.log(Object.getOwnPropertyDescriptors(cat));
// value: ..
// writable: false;
// enumerable: true;
// configurable: false;


let person = {
    name: 'pesho',
    age: 20, 
    hobby: 'football',
}
// Object seal
console.log(Object.getOwnPropertyDescriptors(cat));
// value: ..
// writable: true;
// enumerable: true;
// configurable: true;

Object.seal(cat);

console.log(Object.getOwnPropertyDescriptors(cat));
// value: ..
// writable: true;
// enumerable: true;
// configurable: false;