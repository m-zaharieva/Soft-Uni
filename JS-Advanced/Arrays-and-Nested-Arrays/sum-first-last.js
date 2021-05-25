
function solve(numbers) {
    let result = Number(numbers[0]) + Number(numbers[numbers.length - 1]);
    console.log(result);
    return result;
}

solve(['20', '30', '40']);