function solve(x, y) {
    let matrix = [];
    let currentNumber = 1;

    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y - i; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = currentNumber;
                currentNumber++;
            }
        }

        for (let j = i + 1; j < y - i; j++) {
            if (matrix[j][x - i - 1] === 0) {
                matrix[j][x - i - 1] = currentNumber;
                currentNumber++;
            }
        }

        for (let j = y - i - 1; j >= i; j--) {
            if (matrix[x - i - 1][j] === 0) {
                matrix[x - i - 1][j] = currentNumber;
                currentNumber++;
            }
        }

        for (let j = y - i - 1; j >= i; j--) {
            if (matrix[j][i] === 0) {
                matrix[j][i] = currentNumber;
                currentNumber++;
            }
        }
    }

    matrix.forEach(line => {
        console.log(line.join(' '));
    });
}

solve(3, 3);