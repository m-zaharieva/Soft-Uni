function diagonals(araryOfStrings) {
    let arrayOfNumbers = araryOfStrings.map(r => r.split(' '));

    for (let i = 0; i < araryOfStrings.length; i++) {
        arrayOfNumbers[i] = arrayOfNumbers[i].map(Number);
    }

    let firstDiagonal = 0; 
    let secondDiagonal = 0; 

    let top = 0; 
    let bottom = araryOfStrings.length - 1;
    let left = 0; 
    let right = arrayOfNumbers[0].length - 1;
    while (top <= bottom && left <= right) {
        firstDiagonal += arrayOfNumbers[top][left]
        top++;
        left++;
    }

    top = 0; 
    bottom = araryOfStrings.length - 1;
    left = 0; 
    right = arrayOfNumbers[0].length - 1;
    while (top <= bottom && left <= right) {
        secondDiagonal += arrayOfNumbers[top][right]
        top++;
        right--;
    }

    top = 0; 
    bottom = araryOfStrings.length - 1;
    left = 0; 
    right = arrayOfNumbers[0].length - 1;
    if (firstDiagonal === secondDiagonal) {
            while (top <= bottom) {
                while (left <= right) {
                    if (top !== left && (top + left) !== arrayOfNumbers[0].length - 1) {
                        arrayOfNumbers[top][left] = firstDiagonal;
                    }
                    left++;
                }
                top++;
                left = 0;
            }

        let result = arrayOfNumbers.map(r => r.join(' ')).join('\n');
        console.log(result);
    } else {
        let result = arrayOfNumbers.map(r => r.join(' ')).join('\n');
        console.log(result);
    }

    
}   

diagonals([
    '1 1',
    '1 1'
])