function andProcessors(processorsToProduceInput, employeesInput, workingDaysInput) {
    let processorsToDo = Number(processorsToProduceInput);
    let employees = Number(employeesInput);
    let workingDays = Number(workingDaysInput);

    let hours = workingDays * 8;
    let totalHours = hours * employees;
    let processorsPredused = Math.floor(totalHours / 3);
    let money = 0; 

    //console.log(processorsPredused);

    if (processorsPredused < processorsToDo) {
        money = (processorsToDo - processorsPredused) * 110.10
        console.log(`Losses: -> ${money.toFixed(2)} BGN`);
    } else {
        money = (processorsPredused - processorsToDo) * 110.10
        console.log(`Profit: -> ${money.toFixed(2)} BGN`);
    }
}

andProcessors("150", "7", "18");