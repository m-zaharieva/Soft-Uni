function equalNeighbors(matrix) {
    let pairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let column = 0; column < currentRow.length; column++) {
            
            let currentElement = matrix[row][column];
            
            if (column < currentRow.length - 1 && row < matrix.length - 1) {
                
                let nextRowElement = matrix[row + 1][column];
                let nextColumnElement = matrix[row][column + 1];
                
                if (currentElement === nextRowElement) {
                    pairs++;
                }
                
                if (currentElement === nextColumnElement) {
                    pairs++;
                }

            } else if (column === currentRow.length - 1 && row < matrix.length - 1) {
                let nextRowElement = matrix[row + 1][column];

                if (currentElement === nextRowElement) {
                    pairs++;
                }
            } else if (row === matrix.length - 1 && column < currentRow.length - 1) {
                let nextColumnElement = matrix[row][column + 1];

                if (currentElement === nextColumnElement) {
                    pairs++;
                }
            }
        }
    }
    console.log(pairs);
}

equalNeighbors(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ]
);

// equalNeighbors(
//     [
//         ['test', 'yes', 'yo', 'ho'],
//         ['well', 'done', 'yo', '6'],
//         ['not', 'done', 'yet', '5']
//     ]
// );

// equalNeighbors(
//     [
//         ['2', '3', '4', '7', '0'],
//         ['4', '0', '5', '3', '4'],
//         ['2', '3', '5', '4', '2'],
//         ['9', '8', '7', '5', '4']
//     ]
// );

