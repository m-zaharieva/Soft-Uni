function solve(word, text) {
    let words = word.split(', ');

    words.forEach(word => {
        let wordLength = word.length;

        text = text.replace('*'.repeat(wordLength), word);
    });

    console.log(text);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');