const header = document.querySelector('header');
const meetingTab = header.querySelector('.meeting-tab');
const teamsTab = header.querySelector('.teams-tab');
const addMeeting = header.querySelector('.add-meeting');
const addMeetingForm = document.querySelector('form.create-meeting')
const eventsSection = document.querySelector('.event-details')
const addTeam = header.querySelector('.add-teams')

teamsTab.addEventListener('click', e => {
    meetingTab.classList.remove('active')
    e.target.classList.add('active')
})

meetingTab.addEventListener('click', e => {
    teamsTab.classList.remove('active')
    e.target.classList.add('active')
})

if (addMeeting)
    addMeeting.addEventListener('click', e => {
        eventsSection.classList.remove('show')
        addMeeting.classList.toggle('active')
        addMeetingForm.classList.toggle('show')
    })

if (addTeam)
    addTeam.addEventListener('click', e => {
        addTeam.classList.toggle('active')
        const modal = document.querySelector('.modal-container')
        modal.classList.add('show')
    })