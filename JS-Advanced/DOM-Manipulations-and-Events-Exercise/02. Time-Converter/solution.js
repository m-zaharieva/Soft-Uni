function attachEventsListeners() {
    // select input elements 
    let daysInputElement = document.getElementById('days');
    let hourInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');


    // select button elements
    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', (e) => {
        let days = Number(daysInputElement.value);
        let daysToSeconds = days * 24 * 60 * 60;
        secondsConverter(daysToSeconds);
    })

    hoursButtonElement.addEventListener('click', (e) => {
        let hours = Number(hourInputElement.value);
        let hoursToSeconds = hours * 60 * 60;
        secondsConverter(hoursToSeconds);
    })

    minutesButtonElement.addEventListener('click', (e) => {
        let minutes = Number(minutesInputElement.value);
        let minutesToSeconds = minutes * 60;
        secondsConverter(minutesToSeconds);
    })

    secondsButtonElement.addEventListener('click', (e) => {
        let seconds = Number(secondsInputElement.value);
        secondsConverter(seconds);
    })



    function secondsConverter(sec) {
        let seconds = sec;
        let minutes = seconds / 60; 
        let hours = minutes / 60; 
        let days = hours / 24;

        secondsInputElement.value = seconds;
        minutesInputElement.value = minutes;
        hourInputElement.value = hours;
        daysInputElement.value = days;
    }
}