function solve(numbers) {
    let result = [];
    for (let index in numbers) {
        if (index % 2 === 0) {
            result.push(numbers[index]);
        }
    }

    console.log(result.join(' '));
}

solve(['20', '30', '40', '50', '60']);