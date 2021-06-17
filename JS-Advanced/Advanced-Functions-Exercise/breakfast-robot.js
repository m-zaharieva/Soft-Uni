function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    function inner(inputString) {
        let [command, recipeOrIngredients, quantity] = inputString.split(' ');
        quantity = Number(quantity);

        if (command == 'restock') {
            return restockFunction(recipeOrIngredients, quantity);

        } else if (command == 'prepare') {
            return prepareFunction(recipeOrIngredients, quantity);

        } else {
            return reportFunction();
        }
    }

    function restockFunction(ing, quant) {
        ingredients[ing] += quant;
        return 'Success';
    }


    function prepareFunction(recipe, qnt) {
        let neededIngedients = recipes[recipe];
        for (const ingredient in neededIngedients) {
            let recipeIngr = neededIngedients[ingredient] * qnt;
            let ingInStock = ingredients[ingredient];
            if(ingInStock >= recipeIngr) {
                ingredients[ingredient] = ingredients[ingredient] - recipeIngr;
            } else {
                return `Error: not enough ${ingredient} in stock`
            }
        }
        return 'Success';
    }

    function reportFunction() {
        return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`
        
    }


    return inner;
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock
console.log(manager("report")); // Error: not enough carbohydrate in stock

// restock flavour 50
// prepare lemonade 4
// restock carbohydrate 10
// restock flavour 10
// prepare apple 1
// restock fat 10
// prepare burger 1
// report

//protein, carbohydrate, fat and flavours.