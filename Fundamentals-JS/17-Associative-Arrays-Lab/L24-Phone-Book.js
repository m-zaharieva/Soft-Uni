function phoneBook(input) {
    let contacts = {};
    input.forEach(line => {
        let [name, phone] = line.split(' ');
        contacts[name] = phone;
    });

    for (let key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);