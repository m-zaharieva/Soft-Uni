function newHome(flowerTypeInput, quantityInput, budgetInput) {
    let floweType = flowerTypeInput;
    let quantity = Number(quantityInput);
    let budget = Number(budgetInput);
    let rosesPrise = quantity * 5.00; 
    let dahliasPrise = quantity * 3.80; 
    let tulipsPrise = quantity * 2.80;
    let narcissusPrise = quantity * 3.00; 
    let gladiolusPrise = quantity * 2.50;


    switch (floweType) {
        case "Roses":
            if (quantity > 80) {
                rosesPrise = rosesPrise * 0.90;
            }
            if (rosesPrise <= budget) {
                console.log(`Hey, you have a great garden with ${quantity} ${floweType} and ${(budget - rosesPrise).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(rosesPrise - budget).toFixed(2)} leva more.`)
            }
            break; 
        case "Dahlias":
            if (quantity > 90) {
                dahliasPrise = dahliasPrise * 0.85;
            }
            if (dahliasPrise <= budget) {
                console.log(`Hey, you have a great garden with ${quantity} ${floweType} and ${(budget - dahliasPrise).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(dahliasPrise - budget).toFixed(2)} leva more.`)
            }            
            break; 
        case "Tulips":
            if (quantity > 80) {
                tulipsPrise = tulipsPrise * 0.85;
            }
            if (tulipsPrise <= budget) {
                console.log(`Hey, you have a great garden with ${quantity} ${floweType} and ${(budget - tulipsPrise).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(tulipsPrise - budget).toFixed(2)} leva more.`)
            }               
             break; 
        case "Narcissus":
            if (quantity < 120) {
                narcissusPrise = narcissusPrise * 1.15;
            }
            if (narcissusPrise <= budget) {
                console.log(`Hey, you have a great garden with ${quantity} ${floweType} and ${(budget - narcissusPrise).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(narcissusPrise - budget).toFixed(2)} leva more.`)
            }            
            break; 
        case "Gladiolus": 
        if (quantity < 80) {
            gladiolusPrise = gladiolusPrise * 1.20;
        }
        if (gladiolusPrise <= budget) {
            console.log(`Hey, you have a great garden with ${quantity} ${floweType} and ${(budget - gladiolusPrise).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money, you need ${(gladiolusPrise - budget).toFixed(2)} leva more.`)
        }           
            break; 
    }
}

newHome("Roses", "55", "250");