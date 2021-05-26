function solve(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                mainDiagonal += matrix[row][col];
            }
            if (row + col === matrix[row].length - 1) {
                secondaryDiagonal += matrix[row][col];
            }
        }
    }

    let result = `${mainDiagonal} ${secondaryDiagonal}`;
    console.log(result);

}

solve([[20, 40],
    [10, 60]]);