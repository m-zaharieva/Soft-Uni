function vacationBookList(bookPagesInput, pagesPerHourInput, daysInput) {
    let bookPages = Number(bookPagesInput);
    let pagesPerHour = Number(pagesPerHourInput);
    let days = Number(daysInput);
    let result = bookPages / pagesPerHour / days;

    console.log(result);
};

vacationBookList("212", "20", "2");