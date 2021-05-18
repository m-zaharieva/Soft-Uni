function storeProvision(currentStock, orderedStock) {
    let allProducts = {};

    currentStock.forEach(function (product, index) {
        if (index % 2 === 0) {
            allProducts[product] = Number(currentStock[index + 1]);
        }
    });

    for (let i = 0; i < orderedStock.length; i += 2) {
        let product = orderedStock[i];
        let isCurrent = false;

        for (let property in allProducts) {
            if (property === product) {
                isCurrent = true;
            }
        }

        if (isCurrent) {
            allProducts[product] += Number(orderedStock[i+1]);
        } else {
            allProducts[product] = Number(orderedStock[i+1]);
        }
    }
    
    for (let prop in allProducts) {
        console.log(`${prop} -> ${allProducts[prop]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);