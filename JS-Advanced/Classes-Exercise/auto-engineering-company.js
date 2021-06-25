function autoEngineeringCompany(carArray) {
    let carFactory = new Map();
    
    for (const car of carArray) {
        let [brand, model, quantity] = car.split(' | ');
        quantity = Number(quantity);

        if (!carFactory.has(brand)) {
            carFactory.set(brand, new Map());
        }

        let innerMap = carFactory.get(brand);
        if (!innerMap.has(model)) {
            innerMap.set(model, 0);
        }

        innerMap.set(model, innerMap.get(model) + quantity);
    }
    
    [...carFactory.entries()].forEach(el => {
        let brand = el[0];
        console.log(brand);
        let carsMap = el[1];
        [...carsMap.entries()].forEach(car => {
            let model = car[0];
            let quantity = car[1];
            console.log(`###${model} -> ${quantity}`);

        })
    })
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);