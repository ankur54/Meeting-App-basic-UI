const calendar = document.querySelector('.calendar')
let calendar_days = calendar.querySelector('.calendar-days')
let month_picker = calendar.querySelector('.month-selector')
let year_picker = calendar.querySelector('.year-selector')
const monthList = calendar.querySelector('.month-list')
const monthBlock = calendar.querySelectorAll('.month-block')


const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

const generateCalendar = (month, year) => {
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = months[month]
    month_picker.innerHTML = curr_month
    year_picker.querySelector('span.year').innerHTML = year

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        day.classList.add('days-number')
        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

months.forEach((month, monthIdx) => {
    const monthDiv = document.createElement('div')
    monthDiv.classList.add('month-block')
    monthDiv.innerHTML = month

    monthDiv.addEventListener('click', e => {
        monthList.classList.remove('show')
        generateCalendar(monthIdx, currYear)
    })

    monthList.appendChild(monthDiv)
})

month_picker.addEventListener('click', e => {
    monthList.classList.add('show')
})

let currDate = new Date()

let currMonth = currDate.getMonth()
let currYear = currDate.getFullYear()

year_picker.querySelector(".prev-year")
            .addEventListener('click', e => generateCalendar(currMonth, --currYear))

year_picker.querySelector(".next-year")
            .addEventListener('click', e => generateCalendar(currMonth, ++currYear))

generateCalendar(currMonth, currYear)