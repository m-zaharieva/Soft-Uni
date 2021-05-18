function arrayRotation(arrayOfNums, number) {
    let newArr = arrayOfNums;

    while (number > 0) {
        let currentNum = newArr.shift();
        newArr.push(currentNum);
        number--;
    }

    console.log(newArr.join(' '));
}


arrayRotation([2, 4, 15, 31], 5);
