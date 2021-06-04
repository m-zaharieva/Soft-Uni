function solve(arr) {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    let newArr = [];

    for (const element of arr) {
        if (typeof element === 'number') {
            newArr.push(element);
        } else {
            if (newArr.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let [a, b] = newArr.slice(newArr.length - 2);
                let result = operations[element](a, b);
                newArr.splice(newArr.length - 2, 2, result);
            }
        }
    };

    if (newArr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(newArr.join(''));
    }

}

// solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
// solve([7, 33, 8, '-']);
// solve([15, '/']);