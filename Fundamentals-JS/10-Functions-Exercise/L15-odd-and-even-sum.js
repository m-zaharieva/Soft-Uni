function oddAndEvenSum(num) {
    let odd = 0; 
    let even = 0; 
    
    let myString = numberToString(num);
    let myArray = stringToArray(myString);
    arrayOfNumbers(myArray); 
    evenOrOdd(myArray); 
    
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);


    function numberToString(a) {
        let stringOfNums = num.toString();
        return stringOfNums;
    }

    function stringToArray(string) {
        let array = [];
        for (let i = 0; i < string.length; i++) {
            array[i] = string[i];
        }
        return array;
    }

    function arrayOfNumbers(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = Number(array[i]);
        }
    }

    function evenOrOdd(arr) {
        for (let num of arr) {
            if (num % 2 === 0) {
                even += num; 
            } else {
                odd += num;
            }
        }

    }
}

oddAndEvenSum(1000435);