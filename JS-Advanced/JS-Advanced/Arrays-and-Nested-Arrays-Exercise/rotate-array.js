function solve(array, number) {

    for (let i = 1; i <= number; i++) {
        let rotatedEl = array.pop();
        array.unshift(rotatedEl);
    }

    console.log(array.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);