function solve(matrix) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    
    matrix.forEach(row => {
        let currentMax = Math.max(...row);
        if (currentMax > maxNumber) {
            maxNumber = currentMax;
        }
    });

    return maxNumber;
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);