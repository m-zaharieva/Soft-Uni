function trainTheTrainers(input) {
    let index = 0; 
    let trainersCount = Number(input[index]);  // 3
    index++; 
    let lecture = input[index];  // Arrey 
    index++;
    let mark = Number(input[index]);  // 4.53
    let markSum = 0; 
    let lecturesCount = 0;

    while (lecture !== "Finish") {
        let tempMarkSum = 0;  
        let avarageGrade = 0;
        lecturesCount++;
        for (let i = 1; i <= trainersCount; i++) {
            tempMarkSum += mark;   
            index++;
            mark = Number(input[index]);   
        }
        
        avarageGrade = tempMarkSum / trainersCount;
        markSum += avarageGrade;
        console.log(`${lecture} - ${avarageGrade.toFixed(2)}.`);
        lecture = input[index];
        index++;
        mark = Number(input[index]);
    }
    console.log(`Student's final assessment is ${(markSum / lecturesCount).toFixed(2)}.`);
}
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);