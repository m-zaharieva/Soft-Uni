async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/` + id;

    try {
        const respone = await fetch(url);
        const data = await respone.json();

        document.getElementById('stopName').textContent = data.name;

        const ulElement = document.getElementById('buses');
        ulElement.textContent='';

        Object.entries(data.buses).map(([bus, time]) => {
            const result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ulElement.appendChild(result);
        })
        input.value='';
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }

}