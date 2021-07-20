let message = document.getElementById('message');
message.style.display = 'none';

let years = document.getElementById('years');
let yearsTableElement = document.querySelector('.calendar');
yearsTableElement.addEventListener('click', showCurrentYear);

let months = document.getElementsByClassName('monthCalendar');
let days = document.getElementsByClassName('daysCalendar');

let monthsObj = {
    Jan: 1,
    Feb: 2,
    Mar: 3, 
    Apr: 4, 
    May: 5, 
    Jun: 6, 
    Jul: 7, 
    Aug: 8, 
    Sept: 9, 
    Oct: 10, 
    Nov: 11, 
    Dec: 12,
}


function hideContent() {
    Array.from(months).forEach(year => {
        year.classList.add('hidden');
    });
    
    Array.from(days).forEach(month => {
        month.classList.add('hidden');
    });
}
hideContent()

function showCurrentYear(e) {
    let sellectedYear = e.target.getAttribute('data-year');
    let sellectedYearSection = document.getElementById(`year-${sellectedYear}`);
    sellectedYearSection.addEventListener('click', currentYearMonths);
    sellectedYearSection.classList.remove('hidden');
    years.classList.add('hidden');
}

function currentYearMonths(e) {
    let currentClick = e.target;
    console.log(currentClick);
    let captionElement = e.currentTarget.querySelector('caption');
    let year = captionElement.textContent;

    if (currentClick.tagName === 'CAPTION') {
        hideContent()
        years.classList.remove('hidden');
    } else if (currentClick.tagName === 'TD') {
        let monthElement = e.target.querySelector('.date');
        let month = monthElement.textContent;
        showCurrentMonth(year, month)
    } else if (currentClick.tagName === 'DIV') {
        let month = currentClick.textContent;
    }
}

function showCurrentMonth(year, month) {
    let monthSection = document.getElementById(`month-${year}-${monthsObj[month]}`);
    hideContent()
    monthSection.classList.remove('hidden');
    let captionElement = monthSection.querySelector('caption');
    captionElement.addEventListener('click', returnToCurrentYear);
}

function returnToCurrentYear(e) {
    let caption = e.currentTarget;
    let [month, year] = caption.textContent.split(' ');
    let currentYear = document.getElementById(`year-${year}`);
    hideContent()
    currentYear.classList.remove('hidden');
}
