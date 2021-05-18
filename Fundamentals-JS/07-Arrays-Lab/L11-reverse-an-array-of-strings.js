function reverseAnArray(arr) {
    
    for (let i = 0; i < arr.length / 2; i++) {
        let firstElemet = arr[i]; //a
        let firstElementNewIndex = arr.length - 1- i; //4
        arr[i] = arr[firstElementNewIndex]; // e
        arr[firstElementNewIndex] = firstElemet;
        
    }

    console.log(arr.join(' '));
}

reverseAnArray(['a', 'b', 'c', 'd', 'e']);