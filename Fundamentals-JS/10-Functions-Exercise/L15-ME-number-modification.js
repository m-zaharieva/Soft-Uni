function numberModification(number) {

    let arrayOfNumbers = numberToArrayOfNumbers(number);
    avarageValue(arrayOfNumbers);

    console.log(arrayOfNumbers.join(''));

    function numberToArrayOfNumbers(a) {
        let convertedToString = a.toString();
        let stringToArray = convertedToString.split('');
        return stringToArray.map(Number);
    }

    function avarageValue(array) {
        let avarageSum = 0;
        while (avarageSum <= 5) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }

            let avarageSum = sum / array.length;

            if (avarageSum < 5) {
                arrayOfNumbers.push(9);
            } else {
                return;
            }
        }

    }
}

numberModification(5835);