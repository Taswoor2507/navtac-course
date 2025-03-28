// // var fname  ="alex"

// // console.log(fname)


// // let age = 21
// // heelo("pak" , "gilgit");

// // const heelo = function(country , city){
// //     var address = city +  country
// //     console.log(address)
// //     return address
// // }



// // <!-- Spread operator in objects and Arrays  -->
// // var a= [1,2,3]
// // var b = [...a]
// // a[0] = "added"
// // console.log( "a " , a , "b" ,  b)





// var address = {
//     address : "CANADA"
    
// }

// var user = {
//     age:21, 
//     fname:"alex", 
//     ...address
// }



// console.log(user)



// const dataaa  = {
//     age:2123
// }


// var a= ["a" , "b" , "c", {...dataaa , city :"sdsdf"}] 
// console.log(a)




// const user  = {
// age :21 , 
// nums : [1,2,34]

// }
// var d = user.age     // 21 dt  <number>
// var total = d[0] +32489035
// var numss = user.nums[0]   // [1,2,3 ]
// numss[0] +32334245



// console.log(this)





const user  = {
    fname :"alex" , 
    age:21 , 
    city:"gilgit", 
    status : "ative",
    profile:function(){
         return ()=>{
            console.log("hello " + this.fname)
        }
    }
}


const res= user.profile("MORIING ")
res()