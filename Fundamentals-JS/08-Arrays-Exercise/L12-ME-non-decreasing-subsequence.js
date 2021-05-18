function subsequence(myArray) {
    let max = Number.MIN_SAFE_INTEGER;
    let newArr = myArray.filter(num => {
        if (num >= max) {
            max = num;
            return true;
        } else {
            return false;
        }
    })

    console.log(newArr.join(' '));
}

subsequence([20, 3 ,2 ,15, 6, 1]);