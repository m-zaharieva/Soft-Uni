function solve(arr) {
    let shiffer = arr[0].split(' ').map(Number);

    let index = 1;
    let encodedText = arr[index];

    while (encodedText !== 'find') {
        let decodedTextArr = [];

        for (let i = 0; i < encodedText.length; i++) {
            let currentChar = encodedText[i].charCodeAt(0);
            let decodedChar = currentChar - shiffer[i % shiffer.length];
            decodedTextArr.push(String.fromCharCode(decodedChar));
        }

        let values = extraceValues(decodedTextArr);

        console.log(`Found ${values[0]} at ${values[1]}`);

        index++;
        encodedText = arr[index];   
    }

    function extraceValues(arr) {
        let decodedText = arr.join('');
        // hidden&gold&at<10N70W>
        let indexes = [];
        let currentIndex = decodedText.indexOf('&', 0);
        while (currentIndex > -1) {
            indexes.push(currentIndex);

            currentIndex = decodedText.indexOf('&', currentIndex+=1);
        }

        let treasure = decodedText.substring(indexes[0] + 1, indexes[1]);

        indexes = [decodedText.indexOf('<'), decodedText.indexOf('>')];

        let coordinates = decodedText.substring(indexes[0] + 1, indexes[1]);

        return [treasure, coordinates];
    }
}

// solve([
//     '1 2 1 3',
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     'find'
// ]);

  solve([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
  ]);