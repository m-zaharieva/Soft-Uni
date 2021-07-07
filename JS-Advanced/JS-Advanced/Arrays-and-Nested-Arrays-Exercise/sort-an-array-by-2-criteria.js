function solve(arr) {
    let sorted = arr.sort((a,b) => {
        let aLength = a.length;
        let bLength = b.length;
        if (aLength - bLength > 0) {
            return 1;
        } else if (aLength - bLength < 0) {
            return - 1
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(sorted.join('\n'));
}


solve(['test', 
'Deny', 
'omen', 
'Default']);