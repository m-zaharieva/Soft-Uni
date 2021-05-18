function wordOccurrences(input) {
    let words = new Map();

    for (let item of input) {
        if (!words.has(item)) {
            words.set(item, 1)
        } else {
            let currentNumber = words.get(item);
            let newNumber = currentNumber + 1;
            words.set(item, newNumber);
        }
    }

    let wordsEntries = Array.from(words.entries());
    let sortedWords = wordsEntries.sort((a,b) => {
        let amountA = a[1];
        let amountB = b[1];
        return amountB - amountA;
    })

    for (let kvp of sortedWords) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    } 

}

wordOccurrences(
    ["Here", "is", "the", "first", "sentence", 
    "Here", "is", "another", "sentence", 
    "And", "finally", "the", "third", "sentence"]
    );