function solve(...input) {
    let index = 0;
    let countEggsF = Number(input[0]);
    index++;
    let countEggsS = Number(input[index]);
    index++;
 
    let endOfEggs = false;
 
    let command = input[index];
    index++;
 
    while (command !== 'End of battle') {
 
        if (command === 'one') {
            countEggsS--;
            if (countEggsS === 0) {
                endOfEggs = true;
                break;
            }
 
        }
        if (command === 'two') {
            countEggsF--;
            if (countEggsF === 0) {
                endOfEggs = true;
                break;
            }
        }
 
        command = input[index];
        index++;
    }
    if (command === 'End of battle') {
        console.log(`Player one has ${countEggsF} eggs left.`);
        console.log(`Player two has ${countEggsS} eggs left.`);
    }
    if (endOfEggs) {
        if (countEggsF === 0) {
            console.log(`Player one is out of eggs. Player two has ${countEggsS} eggs left.`);
        } else {
            console.log(`Player two is out of eggs. Player one has ${countEggsF} eggs left.`);
        }
    }
}

//solve(["6", "3", "one", "two", "two", "one", "one"]);
//solve(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
solve(["2", "6", "one", "two", "two"]);