function solve(input) {
    let result = [];
    while (result.length < 2) {
        let sorted = input.sort((a, b) => a - b);
        result = sorted.slice(0, 2);
    }

    console.log(result.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);