function arrayManipulations(input) {
    let arrayOfNumbers = input.shift().split(' ');
    arrayOfNumbers.map(Number);

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ');
        let command = element[0];
        let number = element[1];

        if (command === 'Add') {
            number = Number(number);
            arrayOfNumbers.push(number);

        } else if (command === 'Remove') {
            let tempIndex = findAnElement();
            arrayOfNumbers.splice(tempIndex, 1);

            function findAnElement() {
                for (let index in arrayOfNumbers) {
                    let n = arrayOfNumbers[index];
                    if (n === '2') {
                        return Number(index);
                    }
                }
            }

        } else if (command === 'RemoveAt') {
            number = Number(number);
            arrayOfNumbers.splice(number, 1);

        } else if (command === 'Insert') {
            let tempIndex = Number(element[2]);
            arrayOfNumbers.splice(tempIndex, 0, number);
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