function reverseString(input) {
    let inputText = '' + input;
    let array = inputText.split('').reverse().join('');
    console.log(array);
}

reverseString('Hello');


// function reverseString(input) {
//     let lettersArray = input.split('');    //["H", "e", "l", "l", "o"]
//     let reversedArray = lettersArray.reverse();     //["o", "l", "l", "e", "H"]
//     let reversedWord = '';

//     for (let i = 0; i <=reversedArray.length-1; i++) { 
//         let temp = reversedArray[i];
//         reversedWord += temp; 
//     }
    
//     console.log(reversedWord);
// }

// reverseString("Hello"); 