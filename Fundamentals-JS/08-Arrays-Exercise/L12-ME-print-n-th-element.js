function printElement(arr) {
    let newArr = [];
    let step = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=step) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(' '));
}

printElement(['1', '2', '3', '4', '5', '6']);
