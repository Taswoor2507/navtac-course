// console.log("start")


// for(let i = 0 ; i<= 10000 ; i++){
//     console.log("sync crenouse code is running ")
// }
// // setInterval(function(){
// //       console.log("hello")
// // } , 3000)

// const id =setTimeout(function(){
//     console.log("hello")
// } , 3000)
// console.log(id)
// console.log("end")




// const box =  document.querySelector(".box");
// const text = "Hello i am web developer . "

// // typewriter effect
// let index = 0 ;
// // console.log(text)
// function typeWriter(){
//    if(index < text.length){
//     // console.log("hello")
//        box.textContent += text[index]
//        index++
//        setTimeout(typeWriter ,200)
//     // typeWriter()
//    }else{
//     box.textContent =''
//       index= 0 
//     //   typeWriter()
//        setTimeout(typeWriter , 200)
//    }
// }
// typeWriter()






// countdown

// const box  =  document.querySelector(".box")
// let count  = 12;


// function countDown(){
//     count--
//     if(count < 10) {
//         box.textContent = `0${count}`
//     }else{
//         box.textContent=count
//     }
//     const id= setTimeout(countDown , 1000)
//     if(count=== 0){
//         box.textContent = `${count}   TIMES UP !!!  `
//         clearTimeout(id)
//     }
// }

// countDown()



// const loader = document.querySelector(".loader")
// const home = document.querySelector(".home")
// const box =  document.querySelector(".box")

// window.addEventListener("load" , ()=>{
//     setTimeout(()=>{
//           box.style.display = "none"
//           home.style.display = "block"
//     } , 3000)
// })






// make a promise 
// const ingredients = ["rice" , "oil" , "meat"]
// const myPromie = new Promise(function(resolve, reject){
//     if(ingredients.includes("onion")){
//         resolve("yummy")
//       }else{
//         reject([1])
//       }
// })

// myPromie.then(function(data){
//    console.log(data)
// }).catch(function(err){
//     console.log(err)
// })

console.log("start")


setTimeout(function(){
    console.log("hello from set time out")
} , 4000)


const i = ["rice" , "meat"]
const mypromise = new Promise(function(resolve, reject){
   
    if(i.includes("meat")){
        setTimeout(function(){
            resolve("yummy")

        } , 4000)
      }
   
})





mypromise.then(function(data){
    console.log(data)
}).catch(function(rej){
  console.log(rej)
})



console.log("end")