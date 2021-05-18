function bunnyKill(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ');
    }

    let coordinatesOfBombs = matrix.pop();
    let length = coordinatesOfBombs.length;
    let bunnyBomb = coordinatesOfBombs.shift();

    while (length !== 0) {
        bunnyBomb = bunnyBomb.split(',');
        let bombX = Number(bunnyBomb[0]);
        let bombY = Number(bunnyBomb[1]);
        let currentBomb = Number(matrix[bombX][bombY]);

        // "10", 10, 10,
        //  10,  10, 10,
        //  10,  10, 10
        if (bombX == 0 && bombY == 0) {
            for (let i = 0; i <= bombX + 1; i++) {
                for (let j = 0; j <= bombY + 1; j++) {
                    if (i != 0 || j != 0) {
                        matrix[i][j] -= currentBomb;
                        if (matrix[i][j] < 0) {
                            matrix[i][j] = 0;
                        }
                    }
                }
            }

            // 10, 10,  10,
            // 10, 10,  10,
            // 10, 10, "10"
        } else if (bombX == (matrix[0].length - 1) && bombY == (matrix.length - 1)) {
            for (let i = bombX; i >= bombX - 1; i--) {
                for (let j = bombY; j >= bombY - 1; j--) {
                    if (i != bombX || j != bombY) {
                        matrix[i][j] -= currentBomb;
                        if (matrix[i][j] < 0) {
                            matrix[i][j] = 0;
                        }
                    }
                }
            }

            // 10, 10, "10",
            // 10, 10,  10,
            // 10, 10,  10
        } else if (bombX == 0 && bombY == (matrix.length - 1)) {
            for (let i = bombX; i <= bombX + 1; i++) {
                for (let j = bombY - 1; j <= bombY; j++) {
                    if (i != bombX || j != bombY) {
                        matrix[i][j] -= currentBomb;
                        if (matrix[i][j] < 0) {
                            matrix[i][j] = 0;
                        }
                    }
                }
            }

            //  10,  10, 10,
            //  10,  10, 10,
            // "10", 10, 10
        } else if (bombX == matrix.length - 1 && bombY == 0) {
            for (let i = bombX - 1; i <= bombX; i++) {
                for (let j = bombY; j <= bombY + 1; j++) {
                    if (i != bombX || j != bombY) {
                        matrix[i][j] -= currentBomb;
                        if (matrix[i][j] < 0) {
                            matrix[i][j] = 0;
                        }
                    }
                }
            }

            // 10, "10", 10,
            // 10, "10", 10,
            // 10, "10", 10
        } else if (bombX > 0 && bombX < (matrix[0].length - 1)) {
            // 10,  10,  10,
            // 10,  10,  10,
            // 10, "10", 10
            if (bombY == (matrix.length - 1)) {
                for (let i = bombX - 1; i <= bombX + 1; i++) {
                    for (let j = bombY - 1; j <= bombY; j++) {
                        if (i != bombX || j != bombY) {
                            matrix[i][j] -= currentBomb;
                            if (matrix[i][j] < 0) {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                }
                // 10, "10", 10,
                // 10,  10,  10,
                // 10,  10,  10
            } else if (bombY == 0) {
                for (let i = bombX - 1; i <= bombX + 1; i++) {
                    for (let j = 0; j <= bombY + 1; j++) {
                        if (i != bombX || j != bombY) {
                            matrix[i][j] -= currentBomb;
                            if (matrix[i][j] < 0) {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                }
                // 10,  10,  10,
                // 10, "10", 10,
                // 10,  10,  10
            } else {
                for (let i = bombX - 1; i <= bombX + 1; i++) {
                    for (let j = bombY - 1; j <= bombY + 1; j++) {
                        if (i != bombX || j != bombY) {
                            matrix[i][j] -= currentBomb;
                            if (matrix[i][j] < 0) {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                }
            }
            //  10,   10,   10,
            // "10", "10", "10",
            //  10,   10,   10
        } else if (bombY > 0 && bombY < (matrix.length - 1)) {
            //  10, 10,  10,
            //  10, 10, "10",
            //  10, 10,  10
            if (bombX == (matrix.length - 1)) {
                for (let i = bombX - 1; i <= bombX + 1; i++) {
                    for (let j = bombY - 1; j <= bombY; j++) {
                        if (i != bombX || j != bombY) {
                            matrix[i][j] -= currentBomb;
                            if (matrix[i][j] < 0) {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                }
                //  10,  10, 10,
                // "10", 10, 10,
                //  10,  10, 10
            } else if (bombX == 0) {
                for (let i = 0; i <= bombX + 1; i++) {
                    for (let j = bombY - 1; j <= bombY + 1; j++) {
                        if (i != bombX || j != bombY) {
                            matrix[i][j] -= currentBomb;
                            if (matrix[i][j] < 0) {
                                matrix[i][j] = 0;
                            }
                        }
                    }
                }
            }
        }

        bunnyBomb = coordinatesOfBombs.shift();
        length--;
    }


    let sum = 0;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let element = Number(matrix[i][j]);
            sum += element;
            if (element != 0) {
                count++;
            }
        }
    }

    console.log(sum);
    console.log(count);
}

// bunnyKill(
//     [
//         '10 10 10',
//         '10 10 10',
//         '10 10 10',
//         '0,0'
//     ]
// );

// bunnyKill(
//     [
//         '5 10 15 20',
//         '10 10 10 10',
//         '10 15 10 10',
//         '10 10 10 10',
//         '2,2 0,1'
//     ]
// )

bunnyKill(
    [
        '5 10',
        '10 10',
        '0,1'
    ]
)

