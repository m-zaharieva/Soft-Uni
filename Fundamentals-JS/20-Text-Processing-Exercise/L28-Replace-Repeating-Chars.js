function solve(text) {

    let textArr = text.split('');
    let newSet = new Set();

    textArr.forEach(char => {
        newSet.add(char);
    });

    Array.from(newSet).forEach(char => {
        while (text.includes(char.repeat(2))) {
            text = text.replace(char.repeat(2), char);
        }
    });

    console.log(text);
}

solve('aaaaabbbbbcdddeeeedssaa');