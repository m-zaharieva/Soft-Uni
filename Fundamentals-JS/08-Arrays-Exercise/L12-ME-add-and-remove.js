function addAndRemove(arr) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'add') {
            newArr.push(index + 1);
        } else if (arr [index] === 'remove') {
            newArr.pop();
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove']);