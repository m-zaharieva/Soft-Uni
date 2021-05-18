function mergeArrays(arrOne, arrTwo) {
    let arrThree = [];
        for (let index = 0; index < arrOne.length; index++) {
            let arrOneElement = arrOne[index];
            let arrTwoElement = arrTwo[index];
            if (index % 2 === 0) {
                arrThree.push(Number(arrOneElement) + Number(arrTwoElement));
            } else {
                arrThree.push(arrOneElement + arrTwoElement);
            }
        }

        console.log(arrThree.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);


//If the index of the element is even, add into the third array the sum of both elements at that index;

//If the index of the element is odd, add the concatenation of both elements at that index;