const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=7')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}

const displayUser = users =>{
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3> User Name:${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email} </p>
        <p> Location:${user.location.city} ${user.location.country}</p>
        `;
        usersContainer.appendChild(userDiv);
    }
}
loadUsers();