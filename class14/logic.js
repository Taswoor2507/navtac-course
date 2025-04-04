
// const methods  ={
//     getName : function(){
//         return this.fname
//     }
// }

// function  createUser(fname , email , age){
//     // 1
//     let user  = Object.create(methods)  //{} , chain --> methods --> proto
//      console.log("step one" , user)
//     // 2
//     user.fname = fname
//     user.email = email
//     user.age = age

//     console.log("step two" , user)
//     //3
//     console.log("step three" , user)
//     return user 
// }

// const user1 = createUser("alex" , "alex@gmail.com" , 23);
// console.log(user1)

// ______________________________________________________

// function hello(){
//     console.log("hello")

// }


// console.log(hello.name)
// hello.call()


// hello.fname = "alex";

// console.log(hello.prototype)




// function createUser(fname , email , age){
// //   1
//     const user  =  Object.create(createUser.prototype);  // {} + {}

//     // 2  
//      user.fname = fname
//      user.email = email
//      user.age = age
//   //  {fname:"" , email:"" , age:"" } + {}


//     // 3
//     return user    // {fname:"" , email:"" , age:"" } + {}



// }


// //4
//   createUser.prototype.getName = function(){
//     console.log(this.fname);
//   }


//   createUser.prototype.setName = function(updatedName){
//     this.fname = updatedName;
//   }



// const u1= createUser("alex" , "a@example.com" , 24)
  
// console.log(u1)

// u1.setName("john")
// console.log(u1)



// function CreateUser(fname , age){
//     console.log(this)
//     this.fname = fname;
//     this.age = age;
// }

// CreateUser.prototype.sing = function(){
//   console.log("lalala la a")
// }


// const u1 = new CreateUser("alex" , 23)
// console.log(u1)
// u1.sing() 

// new Strin



// OOPS
// CLASS