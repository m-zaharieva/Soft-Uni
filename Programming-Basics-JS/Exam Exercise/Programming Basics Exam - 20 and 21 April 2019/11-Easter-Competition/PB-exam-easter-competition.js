function easterCompetition(input) {
    index = 0;
    let easterCake = Number(input[index]);
    index++;
    let name = "";
    let points = 0;
    let bestScore = 0;
    let bestBaker = "";

    for (let i = 1; i <= easterCake; i++) {
        name = input[index];
        index++;
        points = input[index];
        let tempScore = 0;
        while (points !== "Stop") {
            points = Number(input[index]);
            index++;
            tempScore += points;
            points = input[index];
        }

        console.log(`${name} has ${tempScore} points.`);
        index++;
        if (tempScore > bestScore) {
            bestScore = tempScore;
            bestBaker = name;
            console.log(`${name} is the new number 1!`);
        }

    }

    console.log(`${bestBaker} won competition with ${bestScore} points!`);
}

//easterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);

