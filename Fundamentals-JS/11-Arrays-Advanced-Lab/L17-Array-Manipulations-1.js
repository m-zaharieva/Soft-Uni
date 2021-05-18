function arrayManipulations(input) {
    let firstElement = input.shift();
    let array = firstElement.split(' ');
    let arrayOfNumbers = array.map(Number);

    //  input =  ['Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let action = command[0];

        if (action === 'Add') {
            let number = Number(command[1]);
            arrayOfNumbers.push(number);

        } else if (action === 'Remove') {
            let number = Number(command[1]);
            arrayOfNumbers = arrayOfNumbers.filter(el => el != number);
            // let index = function() {
            //     for (let i in arrayOfNumbers) {
            //         if (number === arrayOfNumbers[i]) {
            //             return i;
            //         }
            //     }
            // }

        } else if (action === 'RemoveAt') {
            let number = Number(command[1]);
            arrayOfNumbers.splice(number, 1);

        } else if (action === 'Insert') {
            let number = Number(command[1]);
            let index = Number(command[2]);
            arrayOfNumbers.splice(index, 0, number);

        }
    }

    console.log(arrayOfNumbers.join(' '));
    
}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);



// • Add {number}: add a number to the end of the array
// • Remove {number}: remove number from the array
// • RemoveAt {index}: removes number at a given index
// • Insert {number} {index}: inserts a number at a given index