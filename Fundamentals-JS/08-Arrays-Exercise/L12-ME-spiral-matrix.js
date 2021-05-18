function spiralMatrix(width, height) {
    let rows = Number(width);
    let cols = Number(height);

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0; 
    let bottom = cols - 1;
    let left = 0; 
    let right = rows - 1;

    let index = 1;
    let direction = 0; 

    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0: 
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index;
                    index++;
                }
                top++;
                direction++;
                break;
            case 1: 
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index;
                    index++;
                }
                right--;
                direction++;
                break;
            case 2: 
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index;
                    index++;
                }
                bottom--;
                direction++;
                break;
            case 3:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index;
                    index++;
                }
                left++;
                direction++;
                break;
        }
    }

    
   let result = matrix.map(r => r.join(' ')).join('\n');
   console.log(result);
}

spiralMatrix("3", "3");

//  1 2 3
//  8 9 4
//  7 6 5