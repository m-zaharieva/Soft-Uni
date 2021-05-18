function rotateArr(arr) {
    let rotations = arr.pop();
    
    for (let index = 0; index < rotations; index++) {
        let lastElemet = arr.pop();
        arr.unshift(lastElemet);
    }

    console.log(arr.join(' '));
}

rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);