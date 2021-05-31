function solve(x, y) {
    let matrix = [];
    let currentNumber = 1; 

    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = 0; 
        }
    }

    console.log(matrix);

}

solve(5, 5);