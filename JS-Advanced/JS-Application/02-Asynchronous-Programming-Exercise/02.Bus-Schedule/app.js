function solve() {
    let currentStop = 'depot';
    let nextStop = 'depot';

    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    let infoSpanElement = document.querySelector('#info .info');

    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    function depart() {
        fetch(`${baseUrl}/${nextStop}`)
            .then(body => body.json())
            .then(busStop => {
                let stopName = busStop.name;
                nextStop = busStop.next;
                infoSpanElement.textContent = `Next stop ${stopName}`;


                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(error => {
                infoSpanElement.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    function arrive() {
        fetch(`${baseUrl}/${currentStop}`)
            .then(body => body.json())
            .then(busStop => {
                let stopName = busStop.name;
                currentStop = busStop.next;
                infoSpanElement.textContent = `Arriving at ${stopName}`;

                departButton.disabled = false;
                arriveButton.disabled = true;
            })
            .catch(error => {
                infoSpanElement.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();