let person = {
    name: 'pesho',
    age: 20, 
    hobby: 'football',
}

// ======== Enumerable =========
// it Says if an property of an object can ot cannot by iterable.

// Add new property and configure it to be not numerable
Object.defineProperty(person, 'grades', {
    // Internal properties 
    enumerable: false,
    value: [2, 3, 4, 5, 6],
});

// Change existing property
Object.defineProperty(person, 'hobby', {
    // internal properties 
    enumerable: false, 
})

// Enumerable properties 
for (const prop in person) {
    console.log(prop);
}

console.log(person.grades);

// Get current internal properties of a property
let descriptor = Object.getOwnPropertyDescriptor(person, 'grades');
console.log(descriptor);
// {
//  value: [1, 2, 3, 4, 5, 6],
//  writable: false,
//  enumerable: false,
//  configurable: false,
//}


// change the internal propertires to multiple fileds.
Object.defineProperties(person, {
    grades: {
        enumerable: true,
    }, 
    hobby: {
        enumerable: true,
    }
})

