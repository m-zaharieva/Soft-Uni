function addAndSubtract(numbersArray) {
    let newArray = [];
    let sumOrigin = 0;
    let sumModified = 0;

    for (let index = 0; index < numbersArray.length; index++) {
        let currentNum = numbersArray[index];

        if (currentNum % 2 === 0) {
            currentNum = numbersArray[index] + index;
            newArray.push(currentNum);
        } else {
            currentNum = numbersArray[index] - index;
            newArray.push(currentNum);
        }
    }

    for (let current of numbersArray) {
        sumOrigin += current;
    }

    for (let current of newArray) {
        sumModified += current
    }
 
    console.log(newArray);
    console.log(sumOrigin);
    console.log(sumModified);

}

//addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);