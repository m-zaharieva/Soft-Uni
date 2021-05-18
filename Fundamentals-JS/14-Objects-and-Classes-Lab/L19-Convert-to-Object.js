function convertToObject(input) {
    let person = JSON.parse(input);

    for (let key in person) {
        let value = person[key];
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

// {key}: {value}