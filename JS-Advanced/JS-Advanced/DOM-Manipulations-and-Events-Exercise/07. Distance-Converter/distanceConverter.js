function attachEventsListeners() {
    // select elements 
    let inputDistance = document.getElementById('inputDistance');
    let convertButton = document.getElementById('convert');
    let outputDistance = document.getElementById('outputDistance');
    let selectInput = document.getElementById('inputUnits');
    let selectOutput = document.getElementById('outputUnits');

    let selectObj = {
        km: 1000,
        m: 1,
        cm: 0.01, 
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    convertButton.addEventListener('click', convertUnits);

    function convertUnits() {
        // Get the input, that we wrote
        let inputValue = Number(inputDistance.value);
        // Get the unit we want to transform from
        let inputSelectUnit = selectInput.value;
        // Convert the input to m
        let inputConvert = inputValue * (selectObj[inputSelectUnit]);

        // Get the unit we want to transform to
        let outputSelectUnit = selectOutput.value;
        // convert the output 
        let outPutConvert = inputConvert / selectObj[outputSelectUnit];
        // Print in the output field
        outputDistance.value = outPutConvert;

    }
}