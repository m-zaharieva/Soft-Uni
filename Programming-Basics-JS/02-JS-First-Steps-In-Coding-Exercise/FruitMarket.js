function fruitMarket (strawberriesPrise, bananasKg, orangesKg, redberriesKg, strawberriesKg,){
    let redberriesPrise = Number(strawberriesPrise) / 2;
    let orangesPrise = redberriesPrise - (redberriesPrise * 0.4);
    let bananasPrise = redberriesPrise - (redberriesPrise * 0.8);
    let strawberriesTotal = Number(strawberriesPrise) * Number(strawberriesKg);
    let bananasTotal = bananasPrise * Number(bananasKg);
    let orangesTotal = orangesPrise * Number(orangesKg);
    let redberriesTotal = redberriesPrise * Number(redberriesKg);
    let totalFruitCost = strawberriesTotal + bananasTotal + orangesTotal + redberriesTotal;

    console.log(totalFruitCost.toFixed(2));
};

fruitMarket("48", "10", "3.3", "6.5", "1.7");