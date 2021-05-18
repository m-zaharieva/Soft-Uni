function treckingMania(input) {
    let groups = Number(input[0]);

    let allHickers = 0;
    let musala = 0; 
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let hickersInAGroup = Number(input[i]);

        if (hickersInAGroup <= 5) {
            musala += hickersInAGroup;
        } else if (hickersInAGroup >= 6 && hickersInAGroup <= 12) {
            monblan += hickersInAGroup;
        } else if (hickersInAGroup >= 13 && hickersInAGroup <= 25) {
            kilimandzharo += hickersInAGroup;
        } else if (hickersInAGroup >= 26 && hickersInAGroup <= 40) {
            k2 += hickersInAGroup;
        } else if (hickersInAGroup >= 41) {
            everest += hickersInAGroup;
        }

        allHickers += hickersInAGroup;
    }

    musalaResult = musala / allHickers * 100;
    monblanResult = monblan / allHickers * 100;
    kilimandzharoResult = kilimandzharo / allHickers * 100;
    k2Result = k2 / allHickers * 100;
    everestResult = everest / allHickers * 100;

    console.log(`${musalaResult.toFixed(2)}%`);
    console.log(`${monblanResult.toFixed(2)}%`);
    console.log(`${kilimandzharoResult.toFixed(2)}%`);
    console.log(`${k2Result.toFixed(2)}%`);
    console.log(`${everestResult.toFixed(2)}%`);


}

//treckingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
treckingMania(["5", "25", "41", "31", "250", "6"]);