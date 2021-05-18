function solve(text) {
    let textArr = text.split(' ');
    let totalSum = 0;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    textArr.forEach(element => {
        if (element.length > 1) {
            let charBefore = element[0];
            let charAfter = element[element.length - 1];
            let number = Number(element.substring(1, element.length - 1));
            let tempSum = 0;

            if (charBefore.toUpperCase() === charBefore) {
                let place = alphabet.indexOf(charBefore.toLowerCase()); 
                tempSum += number / (place + 1);
            } else {
                let place = alphabet.indexOf(charBefore); 
                tempSum += number * (place + 1);
            }

            if (charAfter.toUpperCase() === charAfter) {
                let place = alphabet.indexOf(charAfter.toLowerCase()); 
                tempSum -= (place + 1);
            } else {
                let place = alphabet.indexOf(charAfter); 
                tempSum += (place + 1);
            }

            totalSum += tempSum;
        }
    });

    console.log(totalSum.toFixed(2));
}

solve('P34562Z q2576f   H456z');
