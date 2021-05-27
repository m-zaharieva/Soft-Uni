function solve(array) {
    let number = 0;
    let newArray = [];
    array.forEach(command => {
        if (command === 'add') {
            number++;
            newArray.push(number);
        } else if (command === 'remove') {
            number++;
            newArray.pop();
        }
    });

    if (newArray.length > 0) {
        console.log(newArray.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(
    ['add', 
    'add', 
    'remove', 
    'add', 
    'add']
);