function toyShop (travelExpences, puzzlesCount, dollCount, bearCount, minionCount, trucksCount){
    let vacation = Number(travelExpences);
    let puzzles = Number(puzzlesCount);
    let dolls = Number(dollCount);
    let bears = Number(bearCount);
    let minions = Number(minionCount);
    let trucks = Number(trucksCount);
    let totalToyCount = puzzles + dolls + bears + minions + trucks;
    let totalToyMoney = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if(totalToyCount >= 50){
        totalToyMoney = totalToyMoney * 0.75; 
    };

    let rent = totalToyMoney * 0.1;

    let moneyEarned = totalToyMoney - rent;

    if(moneyEarned >= vacation){
        console.log(`Yes! ${(moneyEarned - vacation).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(vacation - moneyEarned).toFixed(2)} lv needed.`);
    };
};
toyShop("40.8", "20", "25", "30", "50", "10");