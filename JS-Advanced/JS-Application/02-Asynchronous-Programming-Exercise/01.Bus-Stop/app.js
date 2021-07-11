function getInfo() {
    let submitButton = document.getElementById('submit');
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let stopIdInput = document.getElementById('stopId');
    let stopId = stopIdInput.value;
    let stationNameDiv = document.getElementById('stopName');
    let ulBuses = document.getElementById('buses');

    fetch(`${baseUrl}/${stopId}`)
        .then(body => body.json())
        .then(station => {

        })
}