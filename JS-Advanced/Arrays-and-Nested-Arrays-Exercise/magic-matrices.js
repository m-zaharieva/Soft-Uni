function solve(matrix) {
    let isMagic = true;

    for (let i = 0; i < matrix.length-1; i++) {
        let rowOneSum = matrix[i].reduce((a, el) => a += el, 0);
        let rowTwoSum = matrix[i + 1].reduce((a, el) => a += el, 0);
        let colOneSum = 0;
        let colTwoSum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            colOneSum += matrix[j][i];
            colTwoSum += matrix[j][i + 1];
        }

        if (rowOneSum !== rowTwoSum || colOneSum !== colTwoSum) {
            isMagic = false;
        }
    }
    console.log(isMagic);
    return isMagic;
}



solve([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
]);
