function suitcasesLoad(input) {
    let volumeCargo = Number(input[0]);
    let suitcasesCount = 0; 
    let suitcasesVolumeTotal = 0; 

    let index = 1; 
    let suitcaseVolume = input[index];
    while (suitcaseVolume !== "End") {
        suitcaseVolume = Number(input[index]); 
        if (index % 3 === 0) {
            suitcaseVolume = suitcaseVolume * 1.10;
        }
        suitcasesVolumeTotal += suitcaseVolume;
        if (suitcasesVolumeTotal > volumeCargo) {
            break;
        }
        suitcasesCount++;
        index++;
        suitcaseVolume = input[index];
    }

    if (suitcasesVolumeTotal <= volumeCargo) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
    } else {
        console.log(`No more space!`);
        console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
    }

}

//suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
//suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);




