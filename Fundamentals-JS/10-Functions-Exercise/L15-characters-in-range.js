function charactersInRange(firstChar, lastChar) {

    let first = firstChar.charCodeAt(0);
    let last = lastChar.charCodeAt(0);

    let max = Math.max(first, last);
    let min = Math.min(first, last);

    let symbolArray = getCharsInRange(min, max);

    console.log(joinChars(symbolArray, " "));


    function getCharsInRange(start, end) {
        let mySymbols = [];

        for (let i = start + 1; i < end; i++) {
            let symbol = String.fromCharCode(i);
            mySymbols.push(symbol);
        }

        return mySymbols;
    }

    function joinChars(arr, operator) {
        let result = '';
        
        for (let index in arr) {
            let character = arr[index];
            if (index < arr.length - 1){
            result += character + operator;
            } else {
                result += character;
            }
        }

        return result;
    }

}

charactersInRange('#', ':');