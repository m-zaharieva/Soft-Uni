function solve(word, text) {
    text = text.toLowerCase();
    wordToLower = word.toLowerCase();

    if (text.split(' ').includes(wordToLower)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve(
    'python',
'JavaScript is the best programming language');