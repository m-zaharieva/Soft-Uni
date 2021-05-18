function film(budgetInput, statistsInput, clothsPriseInput) {
    let budget = Number(budgetInput);
    let statists = Number(statistsInput);
    let clothesPrise = Number(clothsPriseInput);

    let decorPrise = budget * 0.1; 
    let priseForStatists = statists * clothesPrise;

    if(statists > 150) {
        priseForStatists = priseForStatists * 0.9;
    };

    let result = decorPrise + priseForStatists;
    
    if(result <= budget) {
        console.log(`Action!
        Wingard starts filming with ${(budget - result).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!
        Wingard needs ${(result - budget).toFixed(2)} leva more.`)
    }

};

film("20000", "120", "55.5");