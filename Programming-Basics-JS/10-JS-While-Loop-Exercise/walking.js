function walking(input) {
    let goal = 10000;
    let sumStepsPerDay = 0;
    let index = 0; 
    let steps = input[index];

    while(steps !== "Going home"){
        sumStepsPerDay += Number(steps);
        index++;
        steps = input[index];
        if (index > (input.length -1)) {
            break;
        }
    }

    if (sumStepsPerDay >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumStepsPerDay - goal} steps over the goal!`);
    }

    if (steps === "Going home") {
        sumStepsPerDay += Number(input[input.length - 1]);
        if (sumStepsPerDay >= goal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumStepsPerDay - goal} steps over the goal!`);
        } else if (goal > sumStepsPerDay) {
            console.log(`${goal - sumStepsPerDay} more steps to reach goal.`);
        }
    }

}

//walking(["1000", "1500", "2000", "6500"]);
//walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
//walking(["125", "250", "4000", "30", "2678", "4682"]);