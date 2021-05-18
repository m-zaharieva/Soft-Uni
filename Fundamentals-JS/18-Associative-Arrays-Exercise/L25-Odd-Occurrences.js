function oddOccurrences(stringInput) {
    let inputString = stringInput.split(' ');

    let stringObject = {};

    inputString.forEach(element => {
        let caseInsensitiveElement = element.toLowerCase();
        if (!stringObject.hasOwnProperty(caseInsensitiveElement)) {
            stringObject[caseInsensitiveElement] = 1;
        } else {
            stringObject[caseInsensitiveElement] += 1;
        }
    });

    let result = '';
    for (let key in stringObject) {
        if (stringObject[key] % 2 !== 0) {
            result += ` ${key}`; 
        }
    }

    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
