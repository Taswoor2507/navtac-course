import { apiRequest } from "./api.js"
import { userCard } from "./ui.js"
import { addUser } from "./users.js"

const btn = document.querySelector(".generate")


btn.addEventListener("click" , async ()=>{
  const user =  await apiRequest()
  console.log(user)
  userCard(user)
  addUser(user)
})

