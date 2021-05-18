function solve(text) {

    let indexes = [];
    let textArr = text.split('');
    let result = [];

    for (let index in textArr) {
        let char = textArr[index];
        let asciiNum = char.charCodeAt(0);

        if (asciiNum >= 65 && asciiNum <= 90) {
            indexes.push(Number(index));
        }
    }

    for (let i = 0; i < indexes.length; i++) {
        let word = text.substring(indexes[i], indexes[i + 1]);
        result.push(word);
    }

    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');

// 65 - 90