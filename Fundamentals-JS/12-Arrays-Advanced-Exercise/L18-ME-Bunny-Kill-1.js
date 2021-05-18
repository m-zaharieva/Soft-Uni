function bunnyKill(matrix) {
    'use strict';
    let bunnyBombs = matrix.pop().split(' ');
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = matrix[i].split(' ').map(Number);
    }

    let rowLength = newMatrix.length;
    let columnLength = newMatrix[0].length;
    let snowballDamage = 0;
    let count = 0;

    for (let bombs = 0; bombs < bunnyBombs.length; bombs++) {
        let currentPosition = bunnyBombs[bombs].split(',');
        let rowPoint = Number(currentPosition[0]);
        let columnPoint = Number(currentPosition[1]);
        let currentBomb = newMatrix[rowPoint][columnPoint];
        
        if (currentBomb > 0) {

            for (let row = rowPoint - 1; row <= rowPoint + 1; row++) {

                for (let col = columnPoint - 1; col <= columnPoint + 1; col++) {

                    let rowRange = row >= 0 && row <= rowLength - 1;
                    let columnRange = col >= 0 && col <= columnLength - 1;


                    if (rowRange && columnRange) {
                        newMatrix[row][col] -= currentBomb;
                    }
                }
            }

            snowballDamage += currentBomb;
            count++;
        }
    }
    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix[i].length; j++) {
            let element = newMatrix[i][j];
            if (element > 0) {
                snowballDamage += element;
                count++;
            }
        }
    }

    console.log(snowballDamage);
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

bunnyKill(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'
    ]
);

// bunnyKill(
//     [
//         '5 10',
//         '10 10',
//         '0,1 0,0'
//     ]
// );

