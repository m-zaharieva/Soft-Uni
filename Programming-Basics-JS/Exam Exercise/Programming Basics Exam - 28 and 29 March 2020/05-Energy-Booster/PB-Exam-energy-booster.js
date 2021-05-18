function energyBooster(fruit, size, setsInput) {
    let sets = Number(setsInput);
    let prise = 0;

    if(size === "big") {
        switch (fruit) {
            case "Watermelon": prise = sets * 28.70 * 5; break;
            case "Mango": prise = sets * 19.60 * 5; break; 
            case "Pineapple": prise = sets * 24.80 * 5; break;
            case "Raspberry": prise = sets * 15.20 * 5; break;
        }
    } else if (size === "small") {
        switch (fruit) {
            case "Watermelon": prise = sets * 56.00 * 2; break;
            case "Mango": prise = sets * 36.66 * 2; break; 
            case "Pineapple": prise = sets * 42.10 * 2; break;
            case "Raspberry": prise = sets * 20.00 * 2; break;
        }
    }

    if (prise < 400) {
        console.log(`${prise.toFixed(2)} lv.`);
    } else if(prise >= 400 && prise <= 1000) {
        prise *= 0.85;
        console.log(`${prise.toFixed(2)} lv.`);
    } else if(prise > 1000) {
        prise *= 0.50;
        console.log(`${prise.toFixed(2)} lv.`);
    }
}

//energyBooster("Watermelon", "big", "4");
//energyBooster("Pineapple", "small", "1");
//energyBooster("Raspberry", "small", "50");
energyBooster("Mango", "big", "8");


