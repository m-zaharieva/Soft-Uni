let person = {
    name: 'pesho',
    age: 20, 
    hobby: 'football',
}

// ======== Enumerable =========
// Add not numerable property
Object.defineProperty(person, 'grades', {
    // Internal properties 
    enumerable: false,
    value: [2, 3, 4, 5, 6],
});

// Change existing property
Object.defineProperty(person, 'hobby', {
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


// ======== Writable =========
Object.defineProperty(person, 'name', {
    writable: false, 
})