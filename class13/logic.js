// objects 
// let user  = {
//     fname :"alex" , 
//     age:21 , 
//     city:"gilgit", 
//     status : "active",
//     profile:function(){
//             console.log("hello " + this.fname)
//     }
// }




// step two

// function profile(){
//     console.log("hello " + this.fname)
// }
// let user  = {
//     fname :"alex" , 
//     age:21 , 
//     city:"gilgit", 
//     status : "active",
//     profile:profile
// }




// step 3 
// var userMethods = {
//     profile: function(){
//         console.log("hello " + this.fname)
//     }, 
//     changeName: function(newName){
//         this.fname = newName
//     },
//     changeAge: function(newAge){
//         this.age = newAge
//     }
// }
// userMethods.profile()
// let user  = {
//     fname :"alex" , 
//     age:21 , 
//     city:"gilgit", 
//     status : "active",
//     profile:userMethods.profile
// }

// user.profile()





//  
// let users = [];
// function createUser(fullName , email , age , city){
//     // step1
//     let user = {};
//     // step2
//     user.fname = fullName;
//     user.email = email;
//     user.age = age;
//     user.city = city;
//     user.profile = function(){
//         console.log("Hello " + this.fname)
//     }
//    // step3
//    users.push(user)
//    //step4 
//    return "User Registered Successfully!!!";
// }

// let user1 = createUser("Ali" , "ali@gmail.com" ,  21 , "GILGIT")
// let user2 = createUser("Alex" , "alex@gmail.com" ,  22 , "GILGIT")

// // console.log(user1)
// users[0].profile()





// const user =  Object.create(null); // {}
// console.log(user)


// let u1= {
//     key1:"value1",
//     key2:"value2",
// }

// let u2= {
//     key3:"value3"
// }

// console.log(u2.key1)

// let u2 = Object.create(u1)  // {}
// u2.key3 = "value3"
// console.log(u2.key1)



// var a ="fsdfds"
// var b = new String("sfsd")
// console.log(b)
// console.log(b.__proto__.to)
// console.log(b)







// const user = Object.create(methods)
// user.fname = "Alex"

// console.log(user.profile())



const methods = {
    profile: function(){
        console.log("Hello " + this.fname)
    }, 
    changeName: function(newName){
        this.fname = newName
    },
    changeAge: function(newAge){
        this.age = newAge
    }
, 
    sing  :function(){
        return " lalaalalalal"
    }
}
function registerUser(fnmae, email, password) {
//    step one 
   const user  =  Object.create(methods);
   // step two
   user.fname = fnmae;
   user.email = email;
   user.password = password;


   // step three
   return user

}




const u1 = registerUser("ALex" , "alex@gamil.com" ,  "dasdkgj324")
console.log(u1.profile())
