function bitcoin(input) {
    let gold = 0;
    let bitcoins = 0;
    let daysAtTheMine = input.length;
    let index = 0;
    let goldPerDay = input[index];
    let day = 1;
    let totalGold = 0;
    let priceInGoldGrams = Number((11949.16 / 67.51).toFixed(2));
    let dayOfTheFirstBoughtBitcoin = 0;
    let money = 0;
    let leftMoney = 0;

    while (day <= daysAtTheMine) {
        if (day % 3 === 0) {
            goldPerDay = goldPerDay * 0.7;
            totalGold += goldPerDay;
            money += goldPerDay * 67.51;
            break;
        }
        totalGold += goldPerDay;
        money += goldPerDay * 67.51;

        if (priceInGoldGrams <= goldPerDay) {
            bitcoins += Math.floor(goldPerDay / priceInGoldGrams);
            dayOfTheFirstBoughtBitcoin = day;
        }

        index++;
        goldPerDay = input[index];
        day++;
    }

    if (priceInGoldGrams <= totalGold) {
        bitcoins = Math.floor(totalGold / priceInGoldGrams);
        leftMoney = money - (bitcoins * 11949.16);
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstBoughtBitcoin}`);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: 0`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }

}

bitcoin([3124.15, 504.212, 2511.124]);

//console.log(`Bought bitcoins: {count}`);
//console.log(`Day of the first purchased bitcoin: {day}`);
//In case you did not purchase any bitcoins, do not print the second line.
//console.log(`Left money: {money} lv.`);