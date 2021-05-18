function garage(arr) {
    let garages = {};

    arr.forEach(line => {
        let [garageNum, car] = line.split(' - ');
        car = car.split(', ');
        let carObj = {};
        //['color: blue', 'fuel type: diesel']
        car.forEach(el => {
            let [key, value] = el.split(': ');
            carObj[key] = value;
        });
        
        if (!garages.hasOwnProperty(garageNum)) {
            garages[garageNum] = [carObj];
        } else {
            garages[garageNum].push(carObj);
        }
               
    });
            
    Object.keys(garages).forEach(element => {
        console.log(`Garage № ${element}`);
        garages[element].forEach(carObject => {
            // {color: blue, fuel type: diesel}
            //[['color', 'blue'], ['fuel type', 'diesel']]
            let carArr = [];
            Object.entries(carObject).forEach(kvp => {
                let temp = kvp.join(' - ');
                carArr.push(temp);
            });
            console.log(`--- ${carArr.join(', ')}`);
        });
    });
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ]);



// Garage № 1
// --- color - blue, fuel type - diesel
// --- color - red, manufacture - Audi
// Garage № 2
// --- fuel type - petrol
// Garage № 4
// --- color - dark blue, fuel type - diesel, manufacture - Fiat