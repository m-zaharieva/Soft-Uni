function solve(input) {
    let sorted = input.sort((a, b) => a - b);
    let resultLength = Math.ceil(sorted.length / 2);
    let result = sorted.slice(sorted.length - resultLength);

    return result;
}

solve([4, 7, 2, 5]);
// solve([3, 19, 14, 7, 2, 19, 6]);