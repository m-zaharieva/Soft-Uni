function getInfo() {
    // let submitButton = document.getElementById('submit');

    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    let stopIdInput = document.getElementById('stopId');
    let stopId = stopIdInput.value;

    let stationNameDiv = document.getElementById('stopName');
    let ulBuses = document.getElementById('buses');

    let liElements = ulBuses.querySelectorAll('li');
    Array.from(liElements).forEach(li => li.remove());

    fetch(`${baseUrl}/${stopId}`)
        .then(body => body.json())
        .then(station => {

            let stationName = station.name;

            stationNameDiv.textContent = stationName;

            for (const bus in station.buses) {
                let busTime = station.buses[bus];

                let newListItem = document.createElement('li');
                newListItem.textContent = `Bus ${bus} arrives in ${busTime}`

                ulBuses.appendChild(newListItem);
                
            }
        })
        .catch(error => {
            stationNameDiv.textContent = 'Error';
            Array.from(liElements).forEach(li => li.remove());
        })
}