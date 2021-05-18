function orbit(arrayOfOrbit) {
    let rows = arrayOfOrbit[0];
    let cols = arrayOfOrbit[1];
    let starRow = arrayOfOrbit[2];
    let starCol = arrayOfOrbit[3];

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    // let index = 1;
    // matrix[starRow][starCol] = index;
    // index++;
Math.max()
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));

}

orbit([5, 5, 2, 2]);

//  1 2 3 4    2 2 2 3
//  2 2 3 4    2 1 2 3 
//  3 3 3 4    2 2 2 3 
//  4 4 4 4    3 3 3 3  