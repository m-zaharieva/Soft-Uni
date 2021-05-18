function fishingBoat(budgetInput, season, fishmenInput) {
    let budget = Number(budgetInput);
    let fishermen = Number(fishmenInput);
    let rent = 0;
    let discount = 0;
    let total = 0;

    switch (season) {
        case "Spring": rent = 3000; break;
        case "Summer": rent = 4200; break;
        case "Autumn": rent = 4200; break;
        case "Winter": rent = 2600; break;
    }

    if ((fishermen % 2) === 0 && season !== "Autumn") {
        if (fishermen <= 6) {
            discount = rent * 0.90;
            total = discount * 0.95;
        } else if (fishermen <= 11) {
            discount = rent * 0.85;
            total = discount * 0.95;
        } else {
            discount = rent * 0.75;
            total = discount * 0.95;
        }
    } else if ((fishermen % 2) === 1 || season === "Autumn") {
        if (fishermen <= 6) {
            discount = rent * 0.90;
            total = discount;
        } else if (fishermen <= 11) {
            discount = rent * 0.85;
            total = discount;
        } else {
            discount = rent * 0.75;
            total = discount;
        }
    }

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
        
}

fishingBoat("2000", "Winter", "13");