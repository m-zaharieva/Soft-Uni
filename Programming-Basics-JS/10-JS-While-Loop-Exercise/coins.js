function coins(input) {
    let change = Math.floor(Number(input.shift()) * 100);
    let twoLvCoins = 0;
    let oneLvCoins = 0;
    let fiftyStCoins = 0; 
    let twentyStCoins = 0;
    let tenStCoins = 0; 
    let fiveStConis = 0;
    let twoStCoins = 0; 
    let oneStCoins = 0;

    while (true) {
        if (change >= 200) {
            twoLvCoins++;
            change -= 200; 
        } else if (change >= 100 && change < 200) {
            oneLvCoins++;
            change -= 100;
        } else if (change >= 50 && change < 100) {
            fiftyStCoins++;
            change -= 50;
        } else if (change >= 20 && change < 50) {
            twentyStCoins++;
            change -= 20; 
        } else if (change >= 10 && change < 20) {
            tenStCoins++;
            change -= 10;
        } else if (change >= 5 && change < 10) {
            fiveStConis++;
            change -= 5;
        } else if (change >= 2 && change < 5) {
            twoStCoins++;
            change -= 2;
        }  else if (change === 1) {
            oneStCoins++;
            change -= 1;
        } else if (change <= 0) {
            break;
        }
    }

    console.log(twoLvCoins + oneLvCoins + fiftyStCoins + twentyStCoins + tenStCoins + fiveStConis + twoStCoins + oneStCoins);
}

coins(["0.56"]);
//coins(["2"]);
//coins(["2.73"]);