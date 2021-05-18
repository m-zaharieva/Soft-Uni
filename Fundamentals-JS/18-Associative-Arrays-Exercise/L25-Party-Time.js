function partyTime(input) {
    let guestList = {
        VIP: [], 
        regular: []
    };

    let indexOfParty = input.indexOf('PARTY');
    let guestsListArr = input.slice(0, indexOfParty);
    let guestArrived = input.slice(indexOfParty + 1);

    guestsListArr.forEach(guest => {
        if (!isNaN(Number(guest[0]))) {
            guestList['VIP'].push({name: guest, isHere: false});
        } else {
            guestList['regular'].push({name: guest, isHere: false});
        }
    });

    guestArrived.forEach(guest => {
        Object.keys(guestList).forEach(type => {
            guestList[type].forEach(nameObj => {
                if (nameObj['name'] === guest) {
                    nameObj['isHere'] = true;
                }
            });
        });
    });
    
    let vipGuests = guestList.VIP.filter(obj => obj.isHere === false);
    let regularGuests = guestList.regular.filter(obj => obj.isHere === false);

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.concat(regularGuests).forEach(el => console.log(el.name));

    // let guestsDidntCome = [];
    // Object.keys(guestList).forEach(type => {
    //     guestList[type].forEach(guestObj => {
    //         if(!guestObj['isHere']) {
    //             guestsDidntCome.push(guestObj['name']);
    //         }
    //     });
    // });
    
    // console.log(guestsDidntCome.length);
    // for (let el of guestsDidntCome) {
    //     console.log(el);
    // }

}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);