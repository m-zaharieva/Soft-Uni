function dictionary(input) {
    let terms = {};

    input.forEach(element => {
        let term = JSON.parse(element);

        for (let prop in term) {
            terms[prop] = term[prop];
        }
    });

    let keys = Object.keys(terms);
    keys.sort((a,b) => a.localeCompare(b));

    for (let element of keys) {
        for (let prop in terms) {
            if (prop === element) {
                console.log(`Term: ${prop} => Definition: ${terms[prop]}`);
            }
        }
    }
}



dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);