function solve(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < Math.ceil(sorted.length / 2); i++) {
        result.push(sorted[i]);
        if ((sorted.length / 2 !== 0 && i !== Math.floor(sorted.length / 2)) || 
             sorted.length / 2 === 0) {
            result.push(sorted[sorted.length - 1 - i]);
        }
    }

    return result;

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([1, 65, 3, 52, 48, 31, -3, 18, 56]);



