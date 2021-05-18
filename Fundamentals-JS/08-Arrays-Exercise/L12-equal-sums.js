function equalSums(arrNums) {
    let indexOfEquel
    let areEqual = false;

    for (let index = 0; index < arrNums.length; index++) {
        let leftSum = 0;
        let rightSum = 0;
            // left Sum
            for (let i = index-1; i >=0; i--) {
                if (index < 0) {
                    break;
                }
                leftSum += arrNums[i];
            }

            // Right Sum
            for (let j = index + 1; j < arrNums.length; j++) {
                if (j === arrNums.length) {
                    break;
                }
                rightSum += arrNums[j];
            }

            if (leftSum === rightSum) {
                indexOfEquel = index;
                areEqual = true;
            }
    }

    if (areEqual) {
        console.log(indexOfEquel);
    } else {
        console.log('no');
    }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);