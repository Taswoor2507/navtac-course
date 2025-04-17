const users = []
const usersElem = document.querySelector(".users")

function addUser(user){
    users.push(user)
    usersElem.innerHTML = ""
    users.forEach((user)=>{
      usersElem.innerHTML += `
        <img src="${user.results[0].picture.large}" alt="${user.results[0].name.first}">
        <h3>${user.results[0].email}</h3>
        `
    })

}

export {addUser}