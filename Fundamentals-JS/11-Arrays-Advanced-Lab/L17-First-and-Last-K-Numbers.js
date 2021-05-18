function firstAndLastKNums(myArray) {
    let kNumber = myArray.shift();
    let firstKNums = myArray.slice(0, kNumber);
    let lastKNums = myArray.slice(myArray.length - kNumber, myArray.length);

    console.log(firstKNums.join(' '));
    console.log(lastKNums.join(' '));
}

firstAndLastKNums([2, 7, 8, 9]);