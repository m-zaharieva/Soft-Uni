function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let height = 0;

    for (let i = base; i >= 1; i-= 2) {
        height++;
        if (height % 5 === 0 && height !== Math.ceil(base/2)) {
            lazuli += ((i * 4) - 4) * increment;
            stone += Math.pow((i - 2),2) * increment;
        } else if (height === Math.ceil(base/2)) {
            gold += i * i * increment;
        } else {
            stone += Math.pow((i -2),2) * increment;
            marble += ((i * 4) - 4) * increment;
        }
    }

    let finalHeight = height * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);

}

pyramid(11, 0.75);

//The bulk is made out of stone, while the outer layer is made out of marble.
//Every fifth step’s outer layer is made out of lapis lazuli instead of marble.
//The final step is made out of gold.
//every next step is reduced by 2 blocks (1 from each side)

//Stone required: 165
// Marble required: 112
// Lapis Lazuli required: 8
// Gold required: 1
// Final pyramid height: 6