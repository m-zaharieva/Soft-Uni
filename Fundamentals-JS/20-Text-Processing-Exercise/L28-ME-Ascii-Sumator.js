function solve(input) {
    let [charOne, charTwo, text] = input;
    
    let textArr = text.split('');
    let textToCode = textArr.map(char=> {
        return char.charCodeAt(0)
    });
    
    let charOneCode = charOne.charCodeAt(0);
    let charTwoCode = charTwo.charCodeAt(0);
    let first = Math.min(charOneCode, charTwoCode);
    let last = Math.max(charOneCode, charTwoCode);

    let totalSum = 0; 

    textToCode.forEach(code => {
        if (code > first && code < last) {
            totalSum += code;
        }
    });


    console.log(totalSum);

}

solve([ '.', '@', 'dsg12gr5653feee5' ]);
// solve([ '?', 'E', '@ABCEF' ]);
// solve([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);