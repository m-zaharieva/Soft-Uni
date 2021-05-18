function matrix(num) {
    let matrixArray = createNxNMatrix(num);
    
    printMatrix(matrixArray);

    function createNxNMatrix(number) {
        let zeroMatrix = [];

        for (let i = 0; i < number; i++) {
            zeroMatrix[i] = [];
            for(let j = 0; j < number; j++) {
                zeroMatrix[i][j] = number; 
            }
        }
        return zeroMatrix;
    }

    function printMatrix(array) {
        
        for (let i = 0; i < array.length; i++) {
            let row = '';
            for (let j = 0; j < array.length; j++) {
                if (j < array.length - 1) {
                    row += array[i][j] + ' ';
                } else {
                    row += array[i][j];
                }
            }
            console.log(row);
        }
    }
}

matrix(7);