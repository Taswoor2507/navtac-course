// // var btn = document.querySelector("button")
// // let input =  document.querySelector("input")

// // // console.log("start")

// // // window.addEventListener("keydown" , (e)=>{
// // //     console.log("button clicked")
// // //     console.log(e.key)
// // // })


// // // console.log("end")



// // // btn.addEventListener("click" , ()=>{
// // //     console.log(input.value.toUpperCase())

// // //     input.value = ""
// // // })


// // // btn.addEventListener("click" , ()=>{
// //     //     console.log(input.value.toUpperCase())
    
// //     //     input.value = ""
// //     // })
// // // input.addEventListener("input" , ()=>{
// // //     // console.log(input.value)
// // //     if(input.value.length >= 8){
// // //         btn.style.backgroundColor = "green"
// // //     }else{
// // //         btn.style.backgroundColor="red"
// // //     }

// // // })


// // const form =  document.querySelector("form")
// // const name =  document.querySelector("#name")
// // const email =  document.querySelector("#email")
// // const password =  document.querySelector("#password")



// // // submit 
// // form.addEventListener("submit" , (e)=>{
// //     e.preventDefault()
// //     const user = {};
// //     user.fulname = name.value
// //     user.email = email.value
// //     user.password= password.value
// //     console.log(user)

// //     name.value =""
// //     email.value =""
// //     password.value=""
// // })





// // const body  = document.body
// // const link = document.createElement("a")
// //  <a></a> 

// // link.setAttribute("href" ,"https://google.com")
// // <a href="https://google.com"></a>

// // link.innerText = "GOOGLE"
// // body.appendChild(link)
// // // link.preventDefault()
// // link.addEventListener("click" , (e)=>{
// //     console.log("click")
// //     e.preventDefault()
// // })



// const box = document.querySelector(".box")
// const innerbox = document.querySelector(".innerbox")
// const  child = document.querySelector(".child")



// // box.addEventListener("click" , ()=>{
// //     console.log("box clicked")
// // }, true)


// // innerbox.addEventListener("click" , ()=>{
// //     console.log("inner clicked")
// // }, true)

// // child.addEventListener("click" , ()=>{
// //     console.log("child clicked")
// // } ,true)



// // box.addEventListener("click" , (e)=>{
// //     console.log("box clicked")
// //    e.stopPropagation()
// // })


// // innerbox.addEventListener("click" , (e)=>{
// //     console.log("inner clicked")
// //     e.stopPropagation()

// // })

// // child.addEventListener("click" , (e)=>{
// //     console.log("child clicked")
// //     e.stopPropagation()

// // })



// box.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("box")){
//         console.log("box clicked")
//     }else if(e.target.classList.contains("innerbox")){
//         console.log("inner clicked")
//     }else{
//         console.log("child clicked")
//     }
// }) 






