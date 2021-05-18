function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    return person;
}

personInfo("Peter", "Pan", "20");