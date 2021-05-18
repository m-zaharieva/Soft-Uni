function solve(arr) {
    let [text, pattern] = arr;

//astalavista baby
    while (pattern.length > 0) {
        let firstIndex = text.indexOf(pattern);
        let lastIndexOf = text.lastIndexOf(pattern);

        if (firstIndex > -1 && lastIndexOf > -1 && firstIndex !== lastIndexOf) {
            let firstHalf = text.substring(0, lastIndexOf);
            let secondHalf = text.substring(lastIndexOf + pattern.length);
            text = firstHalf + secondHalf;
            
            firstHalf = text.substring(0, firstIndex);
            secondHalf = text.substring(firstIndex + pattern.length);
            text = firstHalf + secondHalf;

            console.log(`Shaked it.`);
            let pat1 = pattern.substring(0, pattern.length / 2);
            let pat2 = pattern.substring(pattern.length / 2 + 1);
            pattern = pat1 + pat2;
        } else {
            break;
        }
    }

    console.log(`No shake.`);
    console.log(text);
}

// solve([ 'astalavista baby', 'sta', '' ]);
solve([ '##mtm!!mm.mm*mtm.#', 'mtm', '' ]);