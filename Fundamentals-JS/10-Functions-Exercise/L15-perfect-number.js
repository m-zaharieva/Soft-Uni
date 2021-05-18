function perfectNumber(integer) {
    
    let arrayOfNums = findDivisors(integer);
    sumOfDivisors(arrayOfNums);

    if (sumOfDivisors(arrayOfNums) === integer) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
 
    function findDivisors(num) {
        let arrayOfDivisors = [];
        for (let i = 1; i <= Math.floor(num/2); i++) {
            if (num % i === 0) {
                arrayOfDivisors.push(i);
            }
        }
        return arrayOfDivisors;
    }

    function sumOfDivisors(array) {
        let sum = 0; 
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }


}

perfectNumber(1236498);