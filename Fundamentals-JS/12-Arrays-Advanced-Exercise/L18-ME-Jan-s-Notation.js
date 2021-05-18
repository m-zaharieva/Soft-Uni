function jansNotation(array) {
    let arrayOfNumbers = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];

        if (typeof element === 'number') {
            arrayOfNumbers.push(element);

        } else if (typeof element !== 'number') {
            if (arrayOfNumbers.length < 2) {
                console.log('Error: not enough operands!');
                break;
            } else if (arrayOfNumbers.length >= 2){
                lastTwoNumbers(arrayOfNumbers, array[index]);
            }
        }
    }
    
    if (arrayOfNumbers.length > 1) {
        console.log('Error: too many operands!');
    } else if (arrayOfNumbers.length === 1 && array.length % 2 !== 0) {
        console.log(arrayOfNumbers.join(''));
    }


    function lastTwoNumbers(array, operant) {
        switch (operant) {
            case '+':
                array[array.length-2] = array[array.length-2] + array[array.length-1];
                array.length = array.length - 1;
            break;
            case '-':
                array[array.length-2] = array[array.length-2] - array[array.length-1];
                array.length = array.length - 1;
            break;
            case '*':
                array[array.length-2] = array[array.length-2] * array[array.length-1];
                array.length = array.length - 1;
            break;
            case '/':
                array[array.length-2] = array[array.length-2] / array[array.length-1];
                array.length = array.length - 1;
            break;
        }
    }
}

jansNotation(
    [-1,
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/']
    );
