// // Classes

// class Animal {
      
//     constructor(name  , age  , color){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     eat(){
//         console.log("Eating...")
//     }

// }

// // const a1= new Animal("dog" , 2 ,  "white")
// // const a2= new Animal("car" , 1 ,  "black")

// class Dog  extends Animal {
//      constructor(price, name , age , color){
//          super(name, age, color)
//          this.price = price
//      }
// }


// class Cat extends Animal {
//    constructor(name, age, color, sound){
//          super(name, age, color)
//          this.sound = sound
//    }
// }

// const dog1 = new Dog(12000, "dog1" , 1 , "gray" )
// dog1.eat()
// const cat1 = new Cat("cat1" , 1, "brown" , "meowww")
// console.log(cat1)



// // console.log(a1 , a2)

// // dog1.eat()






// encapsulation


// class Bank{

//     // private properties
//     #balance  = 0
//   constructor(accountName , accountid , accountType){
//     this.accountName = accountName;
//     this.accountid = accountid;
//     this.accountType = accountType;
//   }

//     deposit(amount, role){

//         if(role === "admin"){

//             this.#balance += amount
//             console.log(`Deposited ${amount} successfully`)
//         }else{
//             console.log("Only admins can deposit")
//         }

//     }


//     balanceInfo(){
//         console.log(`The balance is ${this.#balance}`)
//     }




// }


// const acc1 = new Bank("John" , 1234 , "saving")
// acc1.deposit(1000, "admin")
// acc1.balanceInfo()
// console.log(acc1.)





// _________________________________________________










// MATH
console.log(Math)
// abs

var a= 2

// var b  = Math.abs(a)
// console.log(b)



// Math.random
// console.log(Math.floor(Math.random() * 6 + 1))



// Math.floor
// console.log(Math.floor(12.6))
// console.log(Math.ceil(12.1))
// console.log(Math.round(12.2))


// Math.pow
// console.log(Math.pow(2, 3))
// console.log(2**3)



// console.log(Math.sqrt(25))


// console.log(Math.max())





// Date

// const dob=  new Date(2000 , 1 , 1 , 0,0 ,0, 0  );
// const today  = new Date()

// console.log(today.getFullYear()  -  dob.getFullYear())




// mini project 
// age calculator

// const dob=  new Date(2000 , 8 , 1 , 0,0 ,0, 0  );
// const today  = new Date()


// function calculateAge(dob){
//     const age = today.getFullYear()  -  dob.getFullYear()
//     const month = today.getMonth() - dob.getMonth()
//     if(month<1){
//         return age - 1
//     }

//   return age

// }
// const res=  calculateAge(dob)
// console.log(res)





// clousers


function outerFUnc(){
    counter =0
    return function innerfunc(){
        console.log(counter++)
    }
}

const f= outerFUnc()

f()
f()
// console.log(f)













