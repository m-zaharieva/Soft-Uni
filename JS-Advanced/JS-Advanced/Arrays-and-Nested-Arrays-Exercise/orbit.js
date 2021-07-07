function solve(array) {
    let [row, cells, x, y] = array;
    let matrix = [];
    let star = 1;

    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < cells; j++) {
            matrix[i][j] = 0;
        }
    }

    matrix[x][y] = star;
    let count = Math.max(Math.abs(x - matrix.length), Math.abs(y - matrix[0].length));

    for (let k = 1; k < count; k++) {
        cicle(x, y, k, matrix);

    }

    // Function
    function cicle(starX, starY, step, matrixStar) {
        for (let i = starX - step; i <= starX + step; i++) {
            for (let j = starY - step; j <= starY + step; j++) {
                if (matrixStar[i] && matrixStar[i][j] === 0) {
                    matrixStar[i][j] = star + step;
                }
            }
        }
    }


        matrix.forEach(line => {
            console.log(line.join(' '));
        });

}

solve([5, 5, 2, 2]);