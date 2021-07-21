const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Satday']

const dailySchedule = document.querySelector('section.daily-schedule')
const dateHeader = dailySchedule.querySelector('h2.today-date')
const dayHeader = dailySchedule.querySelector('h3.today-day')

const day = currDate.getDay()
const date = currDate.getDate()
const month = currDate.getMonth()
const year = currDate.getYear()

dateHeader.innerText = `${date} ${months[month]}, ${year}`
dayHeader.innerText = days[day]

const scheduleDisplay = dailySchedule.querySelector('.schedule-display')
scheduleDisplay.addEventListener('click', e => {
    console.log('Event bubbled up to schedule display!')
    eventsSection.classList.remove('show')
})


{
    const div_12am = document.createElement('div')
    div_12am.classList.add('schedule-time')
    const time_start = document.createElement('div')
    time_start.classList.add('time-start')
    time_start.innerText = '12am'
    div_12am.appendChild(time_start)
    scheduleDisplay.appendChild(div_12am)
}

for (i = 1; i < 12; i++) {
    const div_am = document.createElement('div')
    div_am.classList.add('schedule-time')
    const time_start = document.createElement('div')
    time_start.classList.add('time-start')
    time_start.innerText = `${i}am`
    div_am.appendChild(time_start)
    scheduleDisplay.appendChild(div_am)
}

{
    const div_12pm = document.createElement('div')
    div_12pm.classList.add('schedule-time')
    const time_start = document.createElement('div')
    time_start.classList.add('time-start')
    time_start.innerText = '12pm'
    div_12pm.appendChild(time_start)
    scheduleDisplay.appendChild(div_12pm)
}

for (i = 1; i < 12; i++) {
    const div_pm = document.createElement('div')
    div_pm.classList.add('schedule-time')
    const time_start = document.createElement('div')
    time_start.classList.add('time-start')
    time_start.innerText = `${i}pm`
    div_pm.appendChild(time_start)
    scheduleDisplay.appendChild(div_pm)
}

const meetings = [
    {
        start: '3:00pm',
        end: '4:30pm'
    },
    {
        start: '2:00pm',
        end: '2:30pm'
    },
    {
        start: '5:00pm',
        end: '5:45pm'
    }
]

const changeTimeFormat = function(time) {
    const acronym = time.substring(time.length - 2)
    time = time.substring(0, time.length - 2)
    const [hr, min] = time.split(':')
    if (acronym === 'am') {
        return (parseInt(hr) % 12) + (parseInt(min) / 60)
    }
    else {
        return 12 + (parseInt(hr) % 12) + (parseInt(min) / 60)
    }
}

meetings.forEach(meeting => {
    const startTime = changeTimeFormat(meeting.start)
    const endTime = changeTimeFormat(meeting.end)
    const duration = endTime - startTime

    const meeting_timerange = document.createElement('div')
    meeting_timerange.classList.add('meeting-range')
    meeting_timerange.style.height = `${duration * 5}em`
    meeting_timerange.style.top = `calc(2em + 13px + ${startTime * 5}em)`

    meeting_timerange.addEventListener('click', e => {
        e.stopPropagation()
        eventsSection.classList.toggle('show')
    })

    scheduleDisplay.appendChild(meeting_timerange)
})


const milliTo12Hr = function () {
    const min = new Date().getMinutes()
    const hr = new Date().getHours()
    const acronym = (hr >= 12) ? 'pm' : 'am'
    const currTime = `${hr < 10 ? '0'+hr : hr}:${min < 10 ? '0'+min : min}${acronym}`
    const currTimeDiv = scheduleDisplay.querySelector('.curr-time')
    currTimeDiv.innerText = currTime
    currTimeDiv.style.top = `calc(2em + ${(hr + min/60) * 5}em)`
    currTimeDiv.style.background = 'transparent'

    console.log(currTime)

    setTimeout(milliTo12Hr, 60 * 1000)
}

window.onload = milliTo12Hr