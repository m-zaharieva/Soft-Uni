function solve(arr) {
    let pattern = /\b(?<day>\d{2})([.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDates = [];

    let date = pattern.exec(arr[0]);

    while (date !== null) {
        validDates.push(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`)

        date = pattern.exec(arr[0]);
    }

    console.log(validDates.join('\n'));
}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
  ]);

// dd{separator}Mmm{separator}yyyy