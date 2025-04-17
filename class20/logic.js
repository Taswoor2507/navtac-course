// // PROMISES
// let res= true
// const promise  =  new Promise((resolve, reject)=>{
//     if(res){
//         resolve("yummy")
//     }else{
//         reject("not yummy")
//     }
// })


// // promise.then(function(data){
// //     console.log(data)
// //     return data
// // }).then(function(data2){
// //     const res=  data2 + "food"
// //    promise.resolve(res)
// // }).then((data)=>{
// //     console.log(data)
// // })
// // .catch()



// const p = Promise.resolve("yummy");
// console.log(p)
const cards =  document.querySelector(".cards")
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")

fetchUsers.then((data) =>{
//    console.log(data.json())
   return data.json()
}).then((data)=>{
   data.forEach(user => {
       console.log(user)
       cards.innerHTML +=`
       <div class="card">
        <div class="img-avatar">
          <img src="" alt="">
        </svg>
        </div>
        <div class="card-text">
          <div class="portada">
          
          </div>
          <div class="title-total">   
            <div class="title">${user.email}</div>
            <h2>${user.username}</h2>
        
        <div class="desc">${user.company.catchPhrase}</div>
        <div class="actions">
          <button><i class="far fa-heart"></i></button>
          <button><i class="far fa-envelope"></i></button>
          <button><i class="fas fa-user-friends"></i></button>
        </div></div>
       
        </div>
        
       
        
      </div>
       
       
       
       
       `
   });
})




