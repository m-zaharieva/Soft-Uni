function arrayManipulator(arrayOfNumbers, arrayOfCommands) {
    let numberList = arrayOfNumbers.slice();

    let index = 0; 
    let command = arrayOfCommands[index];

    while (command !== 'print') {
        let commandArray = command.split(' ');
        let manipulation = commandArray[0];

        switch (manipulation) {
            case 'add': 
                let addIndex = Number(commandArray[1]);
                let element = Number(commandArray[2]);
                numberList.splice(addIndex, 0, element);
            break;
            case 'addMany': 
                let addManyIndex = Number(commandArray[1]);
                for (let i = 2; i < commandArray.length; i++) {
                    numberList.splice(addManyIndex, 0, Number(commandArray[i]));
                    addManyIndex++;
                }

            break;
            case 'contains':
                let containsElement = Number(commandArray[1]);
                if (numberList.includes(containsElement)) {
                    console.log(numberList.indexOf(containsElement));
                } else {
                    console.log(-1);
                }
            break;
            case 'remove': 
                let removeIndex = Number(commandArray[1]);
                numberList.splice(removeIndex, 1);
            break;
            case 'shift': 
                let positions = Number(commandArray[1]);
                shiftElements(numberList, positions);
            break;
            case 'sumPairs': 
                let newArr = [];

                if (numberList.length % 2 === 0) {

                    for (let i = 0; i < numberList.length; i+=2) {
                        let firstNum = numberList[i];
                        let secondNum = numberList[i+1];
                        newArr.push(firstNum + secondNum);
                    }

                } else {

                    for (let i = 0; i < numberList.length - 1; i+=2) {
                        let firstNum = numberList[i];
                        let secondNum = numberList[i+1];
                        newArr.push(firstNum + secondNum);
                    }
                    newArr.push(numberList[numberList.length - 1]);
                }

                numberList = newArr;
            
            break;
        }

        index++;
        command = arrayOfCommands[index];
    }

    console.log(`[ ${numberList.join(', ')} ]`);


    function shiftElements(arr, rotations) {
        for (let i = 0; i < rotations; i++) {
            let elementToShift = arr.shift();
            arr.push(elementToShift);
        }
    }
}

// arrayManipulator(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     );

// arrayManipulator(
//     [1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//     );

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
    );