function wordsUppercase(string) {
    let pattern = /[A-Za-z1-9]+/g;
    if (pattern.test(string)) {
        let array = string.match(pattern);
        let newArray = array.map(el => el.toUpperCase());
        let result = newArray.join(', ');
        console.log(result);
    }
}

wordsUppercase('? ?');