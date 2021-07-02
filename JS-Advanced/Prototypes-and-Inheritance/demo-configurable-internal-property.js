let person = {
    name: 'pesho',
    age: 20, 
    hobby: 'football',
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// set configurable to false
Object.defineProperty(person, 'name', {
    configurable: false
})

// than try to change the other three internal properties 
Object.defineProperty(person, 'name', {
    value: 'Gosho'
});

Object.defineProperty(person, 'name', {
    writable: false
});

Object.defineProperty(person, 'name', {
    enumerable: false
});


console.log(Object.getOwnPropertyDescriptor(person, 'name'));
