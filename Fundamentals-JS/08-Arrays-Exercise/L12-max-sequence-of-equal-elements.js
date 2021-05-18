function solve(numberArr) {
    let = arrOfSequance = [];
    for (let i = 0; i < numberArr.length; i++) {
        let equalNums = [numberArr[i]];
        for (let j = i+1; j < numberArr.length; j++) {
            let numOne = numberArr[i];
            let numTwo = numberArr[j];
            if (numOne === numTwo) {
                equalNums.push(numTwo);
            } else {
                break;
            }
        }

        if (arrOfSequance.length < equalNums.length) {
            arrOfSequance = equalNums;
        }
    }

    console.log(arrOfSequance.join(' '));
}


solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);