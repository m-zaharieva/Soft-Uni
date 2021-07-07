let person = {
    name: 'pesho',
    age: 20, 
    hobby: 'football',
}


// Add read-only propery
Object.defineProperty(person, 'name', {
    writable: false
})

// cannot change the value of the 'name' propery.