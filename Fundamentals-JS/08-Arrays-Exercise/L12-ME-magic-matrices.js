function matrix(myArray) {
    let isMagic = true; 
    let row = [];
    let column = [];
        // separate the inner arrays
        for (let i = 0; i < myArray.length; i++) {
            let rowSum = 0; 
            let columnSum = 0;

            for (let j = 0; j < myArray.length; j++) {
                rowSum += (myArray[i])[j];
            }
            row.push(rowSum);

            for (let k = 0; k < myArray.length; k++) {
                 columnSum += (myArray[k])[i]; 
            }
            column.push(columnSum);

        }

        for (let r = 0; r < column.length; r++) {
            for (let q = 0; q < row.length; q++) {
                if (column[r] !== row[q]) {
                    isMagic = false;
                    break; 
                }
            }
        }

        if (isMagic) {
            console.log('true');
        } else {
            console.log('false');
        }
    
}

matrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);