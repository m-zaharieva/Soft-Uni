function solve(input) {
    let result = [];
    input.forEach(element => {
        if (element >= 0) {
            result.push(element)
        } else {
            result.unshift(element);
        }
    });

    console.log(result.join('\n'));
}

solve([3, -2, 0, -1]);