function christmasTournament(input) {
    let index =0;
    let days = Number(input[index]);
    index++;

    let winCount = 0; 
    let loseCount = 0; 
    let charityMoney = 0; 

    for (let i = 0; i < days; i++) {
        let sportName = input[index];
        index++;
        let tempWinCount = 0;
        let tempLoseCount = 0;
        let tempCharityMoney = 0;

        while (sportName !== "Finish") {
            let result = input[index];
            index++;

            if (result === "win") {
                tempWinCount++;
                tempCharityMoney += 20;
            } else {
                tempLoseCount++;
            }
            sportName = input[index];
            index++;
        }
        if (tempWinCount > tempLoseCount) {
            tempCharityMoney = tempCharityMoney * 1.10;
            winCount++;
        } else {
            loseCount++;
        }

        charityMoney += tempCharityMoney;
    }

    if (winCount > loseCount) {
        charityMoney = charityMoney * 1.20; 
        console.log(`You won the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${charityMoney.toFixed(2)}`);
    }
}

//christmasTournament(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);
christmasTournament(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"]);  