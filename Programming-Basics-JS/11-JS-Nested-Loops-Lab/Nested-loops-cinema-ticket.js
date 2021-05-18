function cinemaTicket(input) {
    let movie = input[0];
    let seats = Number(input[1]);
    let index = 2;
    let type = input[index];
    index++;
    // console.log(type);

    let standart = 0; 
    let student = 0; 
    let kid = 0; 
    let totalTickets = 0; 

    while (movie !== "Finish") {
        let soldTickets = 0;   
        
        while (type !== "End") {
            if (type === "standard") {
                standart++;
            } else if (type === "student") {
                student++;
            } else if (type === "kid") {
                kid++;
            }
            soldTickets++;
            totalTickets++;
            
            if (soldTickets >= seats) {
                break;
            }

            type = input[index];
            index++;
        }

        console.log(`${movie} - ${(soldTickets / seats * 100).toFixed(2)}% full.`);

        movie = input[index];
        index++;
        seats = Number(input[index]);
        index++;
        type = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standart / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);

}

cinemaTicket(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", 
              "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
// cinemaTicket(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", 
//               "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", 
//               "Amadeus", "3", "standard", "standard", "standard","Finish"]);