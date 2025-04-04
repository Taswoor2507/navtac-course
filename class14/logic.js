
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
// ___________________________________________

// class User  {
//    constructor(fname , age , email){
//      this.fname = fname;
//      this.age = age;
//      this.email = email;
//    }


//    getName(){
//       console.log(this.fname);
//    }



// }

// const user1 = new User("ALex" , 21 , "a@gmail.com")
// console.log(user1)


// ____________________________________________

// pop , push , shift , unshift
// const arr = [1,2,3,4,5]
// arr.pop()
// arr.shift()


// arr.push(6)
// arr.unshift(6)
// console.log(arr) 



// slice

// const a2= arr.slice(0,3)
// console.log(a2)




