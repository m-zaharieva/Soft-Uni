function radioCrystals(array) {
    let targetTickness = array.shift(); // 1375
   
    for (let i = 0; i < array.length; i++) {
        let chunkPiece = array[i]; // 50 000

        let cutProcessVar = cutProcess(chunkPiece); // 6250
        
        let lapProcessVar = lapProcess(cutProcessVar);
        
        let grindProcessVar = grindProcess(lapProcessVar);
        
        let etchProcessVar = etchProcess(grindProcessVar);
        
        let xRayProcessVar = xRayProcess(etchProcessVar);

        console.log(cutProcessVar);
        console.log(lapProcessVar);
        console.log(grindProcessVar);
        console.log(etchProcessVar);
        console.log(xRayProcessVar);
        
    }

    
    
    
    // cut process for each chunk
    function cutProcess(number) {
        let cutInFour = number / 4;
        let cut = 0;
        while (cutInFour > targetTickness) {
            cutInFour = cutInFour / 4;
            cut++;
        }

        cutInFour = number / (4 * cut);

        return transpotingAndWAshing(cutInFour);
    }

    function transpotingAndWAshing(number) {
        number = Math.floor(number);
        return number;
    }

    function lapProcess(number) {
        let lapLayer = number - number*0.2;
        let lap = 0;

        while (lapLayer > targetTickness + 20) {
            lap++;
            lapLayer -= lapLayer * 0.2;
        }

        lapLayer = number;
        for (let i = 1; i <= lap; i++) {
            lapLayer = lapLayer - lapLayer*0.2;
        }

        return transpotingAndWAshing(lapLayer);
    }

    function grindProcess(number) {
        let grindLayer = number - 20;
        let grind = 0;

        while (grindLayer > targetTickness) {
            grind++;
            grindLayer = grindLayer - 20;
        }

        grindLayer = number;
        grindLayer = number - (grind*20);

        return transpotingAndWAshing(grindLayer);
    }

    function etchProcess(number) {
        let etchLayer = number - 2;
        let etch = 0;

        while (etchLayer >= targetTickness -1) {
            etch++;
            etchLayer = etchLayer - 2;
        }

        etchLayer = number - 2 * etch;

        return transpotingAndWAshing(etchLayer);
    }

    function xRayProcess(number) {
        let xRayLayer = number + 1;
        let xRay = 1; 
        return xRayLayer;
    }
}

radioCrystals([1375, 50000]);