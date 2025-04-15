const userdata = document.querySelector(".user")

function userCard(user){
    userdata.innerHTML = `
        <img src="${user.results[0].picture.large}" alt="${user.results[0].name.first}">
        <h2>${user.results[0].name.first} ${user.results[0].name.last}</h2>
        <h3>${user.results[0].email}</h3>
        `   
}


export {userCard}