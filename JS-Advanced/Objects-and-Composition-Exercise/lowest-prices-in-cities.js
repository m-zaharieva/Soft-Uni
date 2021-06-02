function solve(arr) {
    let products = {};

    arr.forEach(line => {
        let [town, product, prise] = line.split(' | ');
        if (products[product]) {
            products[product][town] = Number(prise);
        } else {
        products[product] = {};
        products[product][town] = Number(prise);
        }
    });

    Object.keys(products).forEach(product => {
        let sortedPrises = Object.keys(products[product]).sort((townA,townB) => {
            let priseA = products[product][townA];
            let priseB = products[product][townB];
            if (priseA - priseB > 0) {
                return 1;
            } else if (priseA - priseB < 0) {
                return -1;
            } else {
                return 0;
            }
        });
        console.log(`${product} -> ${products[product][sortedPrises[0]]} (${sortedPrises[0]})`);
    })
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sofia | Orange | 3',
    'Sofia | Orange | 2',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);