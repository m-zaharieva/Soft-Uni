function journey (budgetInput, seasonInput) {
    let budget = Number(budgetInput);
    let season = seasonInput;
    let costs = 0;

    if (budget <= 100) {
        if (season === "summer") {
            costs = budget * 0.3;
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${costs.toFixed(2)}`);
        } else {
            costs = budget * 0.7;
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${costs.toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            costs = budget * 0.4;
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${costs.toFixed(2)}`);
        } else {
            costs = budget * 0.8;
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${costs.toFixed(2)}`);
        }
    } else if (budget > 1000) {
        costs = budget * 0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${costs.toFixed(2)}`);
    }
}

journey("1200", "summer");