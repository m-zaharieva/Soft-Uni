function solve(word, text) {
    let pattern = new RegExp(`${word}`, 'g');

    let isValid = pattern.test(text);
    while (isValid !== false) {
        text = text.replace(pattern, '');

        isValid = pattern.test(text);
    }

    console.log(text);
}

solve('ice', 'kicegiciceeb');