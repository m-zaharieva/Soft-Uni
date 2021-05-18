function storage(input) {
    let products = new Map();

    for (let string of input) {
        let [name, quantity] = string.split(' ');
        quantity = Number(quantity);
        
        if (!products.has(name)) {
            products.set(name, quantity);
        } else {
            let currentQuantity = products.get(name);
            let newQuantity = currentQuantity + quantity;
            products.set(name, newQuantity); 
        }
    }

    for (let kvp of products) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);