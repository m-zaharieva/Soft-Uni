function textCase(letter) {
    let comparedLetter = letter.toUpperCase();

    if (letter === comparedLetter) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

textCase('L');