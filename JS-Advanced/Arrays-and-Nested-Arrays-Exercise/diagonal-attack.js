function solve(array) {
    let matrix = [];
    array.forEach(line => {
        let lineToArray = line.split(' ').map(Number);
        matrix.push(lineToArray);
    });

    let mainDiagonal = 0;
    let secondDiagonal = 0; 

    for (let i = 0; i < matrix.length; i++) {
            mainDiagonal += matrix[i][i];
            secondDiagonal += matrix[i][matrix[i].length - 1 - i];
    }

    if (mainDiagonal === secondDiagonal) {
        matrix.forEach((line, i) => {
            line.forEach((el, j) => {
                if (i !== j && i + j !== matrix.length - 1) {
                    matrix[i][j] = mainDiagonal;
                }
            });
        });

        printMatrix(matrix);    
    } else {
        printMatrix(matrix);
    }


    // Function
    function printMatrix(input) {
        input.forEach(line => {
            console.log(line.join(' '));
        });
    }

}


solve(['1 1 1',
'1 1 1',
'1 1 0']);