function charityCampaign(daysInput, peopleInput, cakesInput, goffretsInput, pancakesInput) {
    let days = Number(daysInput);
    let people = Number(peopleInput);
    let cakes = Number(cakesInput);
    let goffrets = Number(goffretsInput);
    let pancakes = Number(pancakesInput);
    let gofretsPrisePerDay = goffrets * 5.8;
    let cakesPrisePerDay = cakes * 45;
    let pancakesPrisePerDay = pancakes * 3.2;
    let wonMoneyPerDay = gofretsPrisePerDay + cakesPrisePerDay + pancakesPrisePerDay;
    let totalMoneyWon = wonMoneyPerDay * people * days;
    let expences = totalMoneyWon / 8; 
    let result = totalMoneyWon - expences;

    console.log(result);

};

charityCampaign("23", "8", "14", "30", "16");