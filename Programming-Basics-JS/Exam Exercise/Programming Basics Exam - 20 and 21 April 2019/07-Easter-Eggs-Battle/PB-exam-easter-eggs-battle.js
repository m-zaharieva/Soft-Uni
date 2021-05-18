function easterEggBattle(input) {
    let index = 0;
    let eggsFirstPlayer = Number(input[index]); 
    index++;
    let eggsSecondPlayer = Number(input[index]);
    index++;
    let result = input[index];
    index++;
    let isEndOfBattle = false;
    
    while (result !== "End of battle") {
        if (result === "one") {
            eggsSecondPlayer--;
        } else if (result === "two") {
            eggsFirstPlayer--;
        }

        if (eggsFirstPlayer === 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsSecondPlayer} eggs left.`);
            isEndOfBattle = true;
            break;
        } else if (eggsSecondPlayer === 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsFirstPlayer} eggs left.`);
            isEndOfBattle = true;
            break;
        }


    result = input[index];
    index++;
    }
    if (isEndOfBattle) {
        return;
    }
    if (eggsFirstPlayer > 0 && eggsSecondPlayer >0) {
        console.log(`Player one has ${eggsFirstPlayer} eggs left.`);
        console.log(`Player two has ${eggsSecondPlayer} eggs left.`);
    }
}

easterEggBattle(["6", "3", "one", "two", "two", "one", "one"]);
//easterEggBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
//easterEggBattle(["2", "6", "one", "two", "two"]);

