function piccolo(input) {
    let parkingLot = [];
    let isEmpty = false;
    input.forEach(line => {
        let [direction, number] = line.split(', ');
        if (direction === 'IN') {
            if (!parkingLot.includes(number)) {   
            parkingLot.push(number);
        }
        } else if (direction === 'OUT') {
            let indexOfCar = parkingLot.indexOf(number);
            if (parkingLot.includes(number)) {
                parkingLot.splice(indexOfCar, 1);
            }
            if (parkingLot.length === 0 ) {
                isEmpty = true;
                return;
            }
        }
    });

    if (isEmpty) {
        console.log('Parking Lot is Empty');
        return;
    } 

    let sorted = parkingLot.sort((a, b) => a.localeCompare(b));

    for(let el of sorted) {
        console.log(el);
    }  
}

piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);

piccolo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);