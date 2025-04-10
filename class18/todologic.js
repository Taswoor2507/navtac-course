const input  =  document.querySelector("#task");
const submitBtn = document.querySelector("#add"); 
const ul  = document.querySelector("ul");



// innerhtml
submitBtn.addEventListener("click" , ()=>{
const taskdata =  input.value
  if(taskdata.length <= 3){
    alert("Enter more than 3 characters")
    return
  }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskdata}</span>
        <div class="btns">
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>`

   ul.append(li)

   input.value = ""
})


ul.addEventListener("click" , (e)=>{
   if(e.target.classList.contains("done")){
    //    console.log(e.target.closet)
      
   e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"

}

   if(e.target.classList.contains("delete")){
      e.target.parentNode.parentNode.remove()
   }

})