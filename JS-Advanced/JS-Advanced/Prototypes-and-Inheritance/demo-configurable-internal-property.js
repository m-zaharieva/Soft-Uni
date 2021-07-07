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

// when configurable is set to false, we can change writable to false, but cannot turn it back from false to true. 
Object.defineProperty(person, 'name', {
    writable: false
});

// when we set configurable to false, we cannot change the wnumerable proeprty
Object.defineProperty(person, 'name', {
    enumerable: false
}); 


console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// this is a way to deletea property from an object. 
// but cannot delete a property when its internal configurable property is set to false.
delete person.name;



