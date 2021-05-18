function solve(input) {
    let flights = {};

    input[0].forEach(line => {
        let [numberOfFlight, destination] = line.split(' ');
        flights[numberOfFlight] = {destination: destination, status: 'Ready to fly'};
    });

    input[1].forEach(line => {
        let [numberOfFlight, status] = line.split(' ');
        if (flights.hasOwnProperty(numberOfFlight)) {
            flights[numberOfFlight]['status'] = status;
        }
    });

    // for (const key in flights) {
    //     if (flights[key].status === input[2].join('')) {
    //         console.log(`{ Destination: ${flights[key].destination}, Status: ${flights[key].status} }`);
    //     }
    // }
    
    let filtered = Object.keys(flights).filter(flight => {
        return flights[flight]['status'] === input[2].join(' ');
    });

    filtered.forEach(flightNumber => {
        console.log(`{ Destination: '${flights[flightNumber].destination}', Status: '${flights[flightNumber].status}' }`);
    });
}   

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]);