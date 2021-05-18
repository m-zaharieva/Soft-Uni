function maxNumber(numbersArray) {
    let topElements = [];

    for (let index = 0; index < numbersArray.length; index++) {
        let curentNum = numbersArray[index];
        let isBigger = 0;
        let isSmaller = 0;
        let i = index + 1;
        while (i < numbersArray.length) {
            let tempNum = numbersArray[i];
            
            if (curentNum > tempNum) {
                isBigger++;
            } else {
                isSmaller++;
                break;
            }

            i++;
        }

        if (isSmaller === 0) {
            topElements.push(curentNum);
        }
    }

    console.log(topElements.join(' '));
}

maxNumber([41, 41, 34, 20]);


// Write a function to find all the top integers in an array.
// A top integer is an integer which is bigger than all the elements to its right. 