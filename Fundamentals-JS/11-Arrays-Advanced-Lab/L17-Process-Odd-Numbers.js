// first
// function processOddNumbers(myArray) {
//     let newArray = [];
//     for (let index in myArray) {
//         if (index % 2 !== 0) {
//             let element = myArray[index];
//             newArray.push(element);
//         }
//     }
//     let reversedArray = [];
//     for (let i = newArray.length-1; i >= 0; i--) {
//         let element = newArray[i] * 2;
//         reversedArray.push(element);
//     }

//     console.log(reversedArray.join(' '));
// }

// processOddNumbers([3, 0, 10, 4, 7, 3]);


// second
function processOddNumbersV2(myArray) {
    let newArray = [];

    for (let index in myArray) {
        if (index % 2 !== 0) {
            let element = myArray[index];
            newArray.push(element);
        }
    }

    let doubledArray = newArray.map(x => x * 2);
    doubledArray.reverse();

    console.log(doubledArray.join(' '));
}

processOddNumbersV2([3, 0, 10, 4, 7, 3]);