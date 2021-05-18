function spiceMustFlow(startingYield) {
    let daysMining = 0; 
    let minedYield = 0;

    if (startingYield < 100) {
        console.log(daysMining);
        console.log(minedYield);
        return;
    }

    while (startingYield >= 100) {
        minedYield += startingYield - 26;
        daysMining++;
        startingYield -= 10;
    }

        console.log(daysMining);
        console.log(minedYield - 26);
}

spiceMustFlow(45);

// starting yield - indicates how much spice can be mined on the first day. 
// the second day of mining - the yield drops by 10, meaning on the second day it eill produce 10 less spice than on the first
// on the third day - 10 less than on the second, and so on ... 
// a source is considered profitable only while its yield is at least 100 - when less than 100 spice is expected in a day, abandon the source.
// the srue consumes 26 spice every day at the end of their shift and an additional 26 after the mine has been exhausted.
// Note that the workers cannot consume more spice than there is in storage. 

// how many days the mine has operated
// total amount of spice extracted.
