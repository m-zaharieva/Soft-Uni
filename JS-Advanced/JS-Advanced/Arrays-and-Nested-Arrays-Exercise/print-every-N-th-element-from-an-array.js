function solve(array, number) {
    let result = array.filter((el, i) => {
        if (i % number === 0) {
            return el;
        }
    });

    return result;
}

solve(
    ['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6);