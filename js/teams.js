const teamMemeberSection = document.querySelector('.team-members')

const members = [
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
    { name: 'John Doe', email: 'john.doe@gmail.com' },
];

members.slice(0, 3).forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.classList.add('show');
    memberDiv.innerText = member.name
    teamMemeberSection.appendChild(memberDiv);
})

members.slice(3).forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.innerText = member.name
    teamMemeberSection.appendChild(memberDiv);
})

if (members.length > 3) {
    const remaining = members.length - 3;
    const rem = document.createElement('div')
    rem.classList.add('rem')
    rem.innerText = `${remaining}+`

    rem.addEventListener('click', () => {
        document.querySelectorAll('.team-member:not(show)')
                .forEach(member => member.classList.add('show'));
        rem.style.display = 'none';
    })

    teamMemeberSection.appendChild(rem)
}