function bombNumbers(sequanceNumbers, bombAndPower) {
    let copyOfSequance = sequanceNumbers.slice();
    let bomb = bombAndPower[0];
    let power = bombAndPower[1];
    let indexOfBomb = copyOfSequance.indexOf(bomb);
    
    while (indexOfBomb > -1) {
        
        if (indexOfBomb - power < 0) {
            copyOfSequance.splice(indexOfBomb + 1, power);
            copyOfSequance.splice(0, indexOfBomb + 1); 
            indexOfBomb = copyOfSequance.indexOf(bomb);       

        } else if (indexOfBomb - power >= 0) {
            copyOfSequance.splice(indexOfBomb + 1, power);
            copyOfSequance.splice((indexOfBomb-power), power + 1);
            indexOfBomb = copyOfSequance.indexOf(bomb);
        }
    }
    let sum = 0; 
    for (let element of copyOfSequance) {
        sum += element;
    }

    console.log(sum);
}

bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
bombNumbers(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);
bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);