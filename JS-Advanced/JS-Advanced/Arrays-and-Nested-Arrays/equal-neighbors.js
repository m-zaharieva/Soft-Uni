function solve(input) {
    let equalPairs = 0;

    input.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) {
                equalPairs++;
            }
            if (input[i + 1] && el === input[i + 1][j]) {
                equalPairs++;
            }
        });
    });

    return equalPairs;
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);