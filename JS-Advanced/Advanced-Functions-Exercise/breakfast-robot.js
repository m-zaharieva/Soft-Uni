function solution() {

    function inner(input) {

    }

    return inner;
}


let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock

// restock flavour 50
// prepare lemonade 4
// restock carbohydrate 10
// restock flavour 10
// prepare apple 1
// restock fat 10
// prepare burger 1
// report