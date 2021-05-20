function fruit(fruitType, weight, prise) {
    let money = (weight / 1000) * prise;
    console.log(`I need $${(money).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);