function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

    // select elements from DOM
    let locationInput = document.getElementById('location');
    let getWeatherButton = document.getElementById('submit');
    getWeatherButton.addEventListener('click', getWeather);

    let forecastDiv = document.getElementById('forecast');
    let currentWeatherHolder = document.getElementById('current');

    let upcomingWeatherHolder = document.getElementById('upcoming');

    let conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    }

    function getWeather() {
        Array.from(currentWeatherHolder.querySelectorAll('div')).forEach((el,index) => {
            index !== 0 ? el.remove() : el;
        })

        Array.from(upcomingWeatherHolder.querySelectorAll('div')).forEach((el,index) => {
            index !== 0 ? el.remove() : el;
        })

        let locationName = locationInput.value;
        fetch(baseUrl)
            .then(body => body.json())
            .then(locationsArray => {
                let location = locationsArray.find(el => el.name === locationName);
                let code = location.code;
                
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(body => body.json())
                    .then(current => {
                        let currentForecast = currentWeatherBody(current);
                        currentWeatherHolder.appendChild(currentForecast);
                    })

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(body => body.json())
                    .then(threeDayForecast => {
                        let infoDiv = document.createElement('div');
                        infoDiv.classList.add('forecast-info');

                        threeDayForecast.forecast.forEach(dayReport => {
                            console.log(dayReport);
                            let threeDaysForecast = threeDaysBody(dayReport);
                            infoDiv.appendChild(threeDaysForecast);
                        });

                        upcomingWeatherHolder.appendChild(infoDiv);
                    })

            })
            .catch(error => {
                let errorDiv = document.createElement('div');
                errorDiv.classList.add('label');
                errorDiv.textContent = 'Error';

                currentWeatherHolder.appendChild(errorDiv);
            })

        forecastDiv.style.display = 'block';
    }

    function threeDaysBody(weatherReport) {
        let upcomingSpan = document.createElement('span');
        upcomingSpan.classList.add('upcoming');

        let symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        symbolSpan.textContent = conditions[weatherReport.condition];

        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add('forecast-data');
        degreesSpan.textContent = `${weatherReport.low}°/${weatherReport.high}°`;

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = weatherReport.condition;

        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(degreesSpan);
        upcomingSpan.appendChild(conditionSpan);

        return upcomingSpan;
    }

    function currentWeatherBody(currentWeatherObj) {
        let currentForecastDiv = document.createElement('div');
        currentForecastDiv.classList.add('forecasts');

        let symbolSpan = document.createElement('span');
        symbolSpan.classList.add('condition', 'symbol');
        symbolSpan.textContent = conditions[currentWeatherObj.forecast.condition];

        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');

        let locationSpan = document.createElement('span');
        locationSpan.classList.add('forecast-data');
        locationSpan.textContent = currentWeatherObj.name;

        let degreesSpan = document.createElement('span');
        degreesSpan.classList.add('forecast-data');
        degreesSpan.textContent = `${currentWeatherObj.forecast.low}°/${currentWeatherObj.forecast.high}°`;

        let weatherSpan = document.createElement('span');
        weatherSpan.classList.add('forecast-data');
        weatherSpan.textContent = `${currentWeatherObj.forecast.condition}`;

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(weatherSpan);
        currentForecastDiv.appendChild(symbolSpan);
        currentForecastDiv.appendChild(conditionSpan);

        return currentForecastDiv;
    }

}

attachEvents();