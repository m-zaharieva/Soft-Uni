function solve(array) {
    let matrix = [];
    array.forEach(line => {
        let lineToArray = line.split(' ').map(Number);
        matrix.push(lineToArray);
    });

    let mainDiagonal = 0;
    let secondDiagonal = 0; 

    for (let i = 0; i < matrix.length; i++) {
            mainDiagonal += matrix[i][i];
            secondDiagonal += matrix[i][matrix[i].length - 1 - i];
    }

    console.log(mainDiagonal);
    console.log(secondDiagonal);

}


solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);