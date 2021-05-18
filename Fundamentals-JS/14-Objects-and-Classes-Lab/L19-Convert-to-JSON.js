function convertToJSON(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let toJson = JSON.stringify(person);
    console.log(toJson);

}

convertToJSON(
    'George',
    'Jones',
    'Brown');