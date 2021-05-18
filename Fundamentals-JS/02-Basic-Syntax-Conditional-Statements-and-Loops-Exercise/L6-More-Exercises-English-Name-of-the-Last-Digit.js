function lastDigit(num) {
    let number = '' + num;
    let arr = number.split('');
    let lastDigit = arr[arr.length - 1];

    switch (lastDigit) {
        case "1":console.log('one'); break;
        case "2":console.log('two'); break;
        case "3":console.log('three'); break;
        case "4":console.log('four'); break;
        case "5":console.log('five'); break;
        case "6":console.log('six'); break;
        case "7":console.log('seven'); break;
        case "8":console.log('eight'); break;
        case "9":console.log('nine'); break;
        case "0":console.log('zero'); break;
    }
}

lastDigit(512);



// function lastDigit(input) {
//     let digitToString = input.toString();
//     let digitToArrey = digitToString.split('');
//     let lastDigit = digitToArrey[digitToArrey.length -1];

//     switch(lastDigit) {
//         case "1": console.log("one"); break;
//         case "2": console.log("two"); break;
//         case "3": console.log("three"); break;
//         case "4": console.log("four"); break;
//         case "5": console.log("five"); break;
//         case "6": console.log("six"); break;
//         case "7": console.log("seven"); break;
//         case "8": console.log("eight"); break;
//         case "9": console.log("nine"); break;
//         case "0": console.log("zero"); break;
//     }
// }

// lastDigit(512);