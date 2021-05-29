function solve(arr) {
    let dashboard = [];
    for (let i = 0; i < 3; i++) {
        dashboard[i] = [];
        for (let j = 0; j < 3; j++) {
            dashboard[i][j] = false;
        }
    }

    let player = 'X';
    let isWinning = false;
    for (const element of arr) {
        let [row, column] = element.split(' ');
        row = Number(row);
        column = Number(column);

        if (player === 'X' && dashboard[row][column] === false) {
            dashboard[row][column] = player;
        } else if (player === 'O' && dashboard[row][column] === false) {
            dashboard[row][column] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        let currentRow = [];
        let currentDiagonal = [];
        let currentColumn = [];
        for (let i = 0; i < 3; i++) {
            currentRow.push(dashboard[row][i]);
            currentColumn.push(dashboard[i][column]);
            if (row === column) {
                currentDiagonal.push(dashboard[i][i]);
            } else {
                currentDiagonal.push(dashboard[i][dashboard.length - 1 - i]);
            }
        }

        if (currentRow.every(el => el === dashboard[row][column]) ||
            currentColumn.every(el => el === dashboard[row][column]) ||
            currentDiagonal.every(el => el === dashboard[row][column])) {
            isWinning = true;
            console.log(`Player ${player} wins!`);
        } else if (currentRow.every(el => el !== false) &&
                   currentColumn.every(el => el !== false) &&
                   currentDiagonal.every(el => el !== false)) {
                       console.log(`The game ended! Nobody wins :(`);
                       dashboard.forEach(row => {
                        let tempRow = [];
                        row.forEach(el => {
                            tempRow.push(el);
                        });
                
                        console.log(tempRow.join('\t'));
                    })
                       return;
                   }

        if (isWinning) {
           break;
        }

        if (player === 'X') {
            player = 'O';
        } else {
            player = 'X';
        }

    }
    
    dashboard.forEach(row => {
        let tempRow = [];
        row.forEach(el => {
            tempRow.push(el);
        });

        console.log(tempRow.join('\t'));
    })
}

// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])