function theatrePromotions(day, age) {
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday': console.log('12$'); break;
            case 'Weekend': console.log('15$'); break;
            case 'Holiday': console.log('5$'); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday': console.log('18$'); break;
            case 'Weekend': console.log('20$'); break;
            case 'Holiday': console.log('12$'); break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday': console.log('12$'); break;
            case 'Weekend': console.log('15$'); break;
            case 'Holiday': console.log('10$'); break;
        }
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', -12);



// function solve(day, age) {
//     let ticketPrise = 0;
//     if (day === "Weekday") {
//         if (age >= 0 && age <= 18) {
//             ticketPrise = 12;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 18 && age <= 64) {
//             ticketPrise = 18;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 64 && age <= 122) {
//             ticketPrise = 12; 
//             console.log(`${ticketPrise}$`);
//         } else {
//             console.log('Error!');
//         }
//     } else if (day === "Weekend") {
//         if (age >= 0 && age <= 18) {
//             ticketPrise = 15;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 18 && age <= 64) {
//             ticketPrise = 20;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 64 && age <= 122) {
//             ticketPrise = 15; 
//             console.log(`${ticketPrise}$`);
//         } else {
//             console.log('Error!');
//         }
//     } else if (day === "Holiday") {
//         if (age >= 0 && age <= 18) {
//             ticketPrise = 5;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 18 && age <= 64) {
//             ticketPrise = 12;
//             console.log(`${ticketPrise}$`);
//         } else if (age > 64 && age <= 122) {
//             ticketPrise = 10; 
//             console.log(`${ticketPrise}$`);
//         } else {
//             console.log('Error!');
//         }
//     }
// }

// solve("Weekend", 42);