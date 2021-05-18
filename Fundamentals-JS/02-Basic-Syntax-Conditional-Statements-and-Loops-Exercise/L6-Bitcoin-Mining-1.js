function bitcoin(input) {
    let index = 0; 
    let goldPerDay = input[index];
    let totalGold = 0;
    let money = 0;
    let leftMoney = 0;
    let bitcoins = 0;
    let shiftsCount = input.length;
    let dayOfFirstPurchase = 0;
    let priceInGrams = 11949.16 / 67.51;

    for (let i = 1; i <= shiftsCount; i++) {
        if (i % 3 === 0) {
            goldPerDay = goldPerDay * 0.7;
        }

        totalGold += goldPerDay;

        if (dayOfFirstPurchase === 0) {
            if (totalGold >= priceInGrams) {
                dayOfFirstPurchase = i;
            }
        }
        
        index++;
        goldPerDay = input[index];
    }

    money = totalGold * 67.51;
    bitcoins = Math.floor(totalGold / priceInGrams);
    leftMoney = money - (bitcoins * 11949.16);

    if (dayOfFirstPurchase !== 0) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: 0`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }

}

bitcoin([3124.15, 504.212, 2511.124]);
