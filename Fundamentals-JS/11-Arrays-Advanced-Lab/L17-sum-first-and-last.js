// first version
function sumNumbers(myArray) {
    let firstNum = Number(myArray[0]);
    let lastNum = Number(myArray[myArray.length - 1]);

    let result = firstNum + lastNum;

    return result;
}


// second version
function sumNumbersV2(myArray) {
    let firstNum = myArray.slice(myArray.length - 1);
    let lastNum = myArray.slice(0, 1);

    let result = Number(firstNum) + Number(lastNum);

    return result;
}

sumNumbersV2(['20', '30', '40']);

