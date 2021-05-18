function eastParty(guestsInput, prisePerGuestInput, budgetInput) {
    let guests = Number(guestsInput);
    let prisePerGuest = Number(prisePerGuestInput);
    let budget = Number(budgetInput);

    let cake = budget * 0.10;

    if (guests >= 10 && guests <= 15) {
        prisePerGuest *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        prisePerGuest *= 0.80;
    } else if (guests > 20) {
        prisePerGuest *= 0.75;
    }

    let totalGuestPrise = prisePerGuest * guests;

    let result = totalGuestPrise + cake;

    if (result <= budget) {
        console.log(`It is party time! ${(budget - result).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(result - budget).toFixed(2)} leva needed.`);
    }

}

eastParty("18", "30", "450");



// • Ако бюджетът  е достатъчен:
// ◦ "It is party time! {останали пари} leva left."
// • Ако бюджетът не е достатъчен:
// ◦ "No party! {недостигащи пари} leva needed."