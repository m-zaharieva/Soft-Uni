function easterGuests(guestsInput, budgetInput) {
    let guests = Number(guestsInput);
    let budget = Number(budgetInput);

    let eggsCount = guests * 2; 
    let eggsPrise = eggsCount * 0.45; 
    let cakesCount = Math.ceil(guests / 3);
    let cakesPrise = cakesCount * 4; 
    let totalMoney = eggsPrise + cakesPrise;

    if (totalMoney <= budget) {
        console.log(`Lyubo bought ${cakesCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - totalMoney).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalMoney - budget).toFixed(2)} lv. more.`);
    }


}

easterGuests("10", "35");

