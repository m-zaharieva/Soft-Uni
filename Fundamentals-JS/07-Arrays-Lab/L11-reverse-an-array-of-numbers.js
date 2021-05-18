function reverseAnArray(num, arr) {
    let newArr = [];
    let reversed = [];
    for (let index = 0; index < num; index++) {
        newArr.push(arr[index]);
    }

    for (let k = newArr.length - 1; k >= 0; k--) {
        reversed.push(newArr[k]);
    }

    //reversed = newArr.reverse().join(' ');

    console.log(reversed.join(' '));
    
}

reverseAnArray(3, [10, 20, 30, 40, 50]);