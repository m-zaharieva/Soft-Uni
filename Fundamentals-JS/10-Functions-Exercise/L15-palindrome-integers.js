function palindromeIntegers(numArray) { 
    let numsToStringsArary = [];

    for (let i = 0; i < numArray.length; i++) {
        let currentElement = numArray[i];
        numsToStringsArary[i] = '' + currentElement;
    }

    for (let i = 0; i < numsToStringsArary.length; i++) {
        let currentElement = numsToStringsArary[i];
        let reversedElement = reverseString(currentElement);

        if (currentElement === reversedElement) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

        function reverseString(string) {
            let charArr = string.split('');
            let reversedArr = charArr.reverse();
            let reversedString = reversedArr.join('');
            return reversedString;
        }
}

palindromeIntegers([32,2,232,1010]);