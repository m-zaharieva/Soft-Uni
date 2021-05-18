function traveling(input) {
    let index = 0;
    let destination = input[index];  //0
    index++;  //1
    let budget = Number(input[index]);  //1
    index++;  //2
    let savings = 0; 

    while (destination !== "End") {
        savings = Number(input[index]); //2 //4  //6
        index++;  //3 //5  //7

        while (savings < budget) {
            savings += Number(input[index]);  //3  //5  
            index++; //4 //6  
        }

        console.log(`Going to ${destination}!`);
        destination = input[index++];
        budget = Number(input[index++]);
        savings = 0;

    }

}

//traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360",
           "Portugal", "1450", "400", "400", "200", "300", "300",
           "Egypt", "1900", "1000", "280", "300", "500", "End"])




