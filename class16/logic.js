// https://bioub.github.io/dom-visualizer/

// 
// console.dir(document.documentElement)  //root element get

// query selector 
// const heading = document.querySelector('h1')  // signle element node
// const heading = document.querySelectorAll('h1')   // nodelist of element nodes 
// const heading = document.querySelector('.heading')   //signle element node
// const heading = document.querySelectorAll('.heading')   // nodelist of element nodes 
// const heading = document.querySelector('#head1')   // signle element node


// get element by id
// const heading =  document.getElementById("head1")


// get Elemnts by class name 
// const heading = document.getElementsByClassName("heading")



// get elements by tag name
// const heading = document.getElementsByTagName("h1")


// manipulations 
// const heading= document.querySelectorAll('h1')

// console.log(heading.textContent)
// heading.textContent ="update"
// heading.innerText = "update"
// console.log(heading.innerText)
// heading[2].textContent = "updateddddd"
// looping

// heading.forEach((item)=>{
//     item.textContent="updarted"
// })


// for(let i = 0  ; i< heading.length ; i++){
//     heading[i].textContent = "updateddddd"
// }





// styling 

//  background-color :red;




// heading.forEach((item)=>{
//  item.style.color ="red"
//  item.style.border = "2px solid black"
// item.style.backgroundColor = "blue"
// })






// 

const para  = document.querySelector(".para")
console.log(para.nodeType)
// console.log(para.previousElementSibling)
// console.log(para.nextElementSibling)
// console.log(para.parentNode.parentNode)
// const div  = document.querySelector("div")


// console.log(div.children)
// console.log(div.childNodes)

// console.log(div.firstElementChild)




