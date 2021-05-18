function bitcoinMining (input) {
    let daysMining = input.length;
    let goldTotal = 0;
    let index = 0; 
    let goldPerDay = input[index];
    let goldMoney = 0;

    let bitcoin = 0; 
    let dayFirstBitcoin = 0;

    let leftMoney = 0;
   

    for (let day = 1; day <= daysMining; day++) {
        if (day % 3 === 0) {
            goldPerDay *= 0.7;
        }

        goldTotal += goldPerDay;
        goldMoney = goldTotal * 67.51;  // money to buy bitcoins 
        
        if (dayFirstBitcoin === 0 && goldMoney > 11949.16) {
            dayFirstBitcoin = day;
        }

        index++;
        goldPerDay = input[index];
    }

    if (goldMoney > 11949.16) {
        bitcoin = Math.floor(goldMoney / 11949.16);
        console.log(`Bought bitcoins: ${bitcoin}`);
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
        leftMoney = goldMoney - (bitcoin * 11949.16);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: 0`);
        leftMoney = goldMoney - (bitcoin * 11949.16);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    }

}

//bitcoinMining([100,200,300]);
//bitcoinMining([50, 100]);
 bitcoinMining([3124.15, 504.212, 2511.124]);


// 1 Bitcoin - 11949.16 lv.
// 1 g of gold - 67.51 lv.

// Fisrt line - "Bought bitcoins: {count}"
// Second line -  "Day of the first purchased bitcoin: {day}" - In case you did not purchased any bitcoins, do not print the second line.
// Third line - "Left money: {money} lv." - rounded by the second digit after the decimal point.