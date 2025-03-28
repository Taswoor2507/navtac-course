// //   hof

// function hof(cb){
//     cb()
// }

// var innner= function(){
//     console.log("heelo from cb function")
// }


// hof(innner)


// methods
// foreach 

//  indexing 
// length
// loops <iterate>
// update 
// get 
//nested 
// objjects inside array


//loops
// for  , for in  , for of  , while  , do while 
// _____________________________

// for(let fruit in arr) {
    //         console.log(arr[fruit].toUpperCase())
    //     }
    
    //   const res=   arr.forEach(function(value , index ){
        //             console.log(value , index )
        //             return value
        //         })
        
        
        //         console.log(res)
        
        // var arr =  ["apple" , "orange" , "banana" , "grpaes"] 
        // // map
        // const r = arr.map(function(value , index, array){
        //     console.log(value , index , array)
        //       return value
        // })

        // console.log(r)


        const products = [
            { id: 1, name: "Laptop", price: 800, category: "Electronics", stock: 10 },
            { id: 2, name: "Smartphone", price: 500, category: "Electronics", stock: 15 },
            { id: 3, name: "Headphones", price: 50, category: "Accessories", stock: 30 },
            { id: 4, name: "Smartwatch", price: 200, category: "Electronics", stock: 12 },
            { id: 5, name: "Tablet", price: 300, category: "Electronics", stock: 8 },
            { id: 6, name: "Keyboard", price: 40, category: "Accessories", stock: 20 },
            { id: 7, name: "Mouse", price: 25, category: "Accessories", stock: 25 },
            { id: 8, name: "Monitor", price: 150, category: "Electronics", stock: 10 },
            { id: 9, name: "Printer", price: 100, category: "Electronics", stock: 5 },
            { id: 10, name: "USB Flash Drive", price: 20, category: "Accessories", stock: 50 },
            { id: 11, name: "External Hard Drive", price: 80, category: "Storage", stock: 10 },
            { id: 12, name: "Gaming Chair", price: 250, category: "Furniture", stock: 5 },
            { id: 13, name: "Desk Lamp", price: 35, category: "Furniture", stock: 18 },
            { id: 14, name: "Bluetooth Speaker", price: 60, category: "Accessories", stock: 22 },
            { id: 15, name: "Power Bank", price: 45, category: "Accessories", stock: 30 },
            { id: 16, name: "Webcam", price: 70, category: "Electronics", stock: 12 },
            { id: 17, name: "Microphone", price: 90, category: "Electronics", stock: 9 },
            { id: 18, name: "VR Headset", price: 300, category: "Electronics", stock: 7 },
            { id: 19, name: "Router", price: 120, category: "Electronics", stock: 14 },
            { id: 20, name: "Projector", price: 400, category: "Electronics", stock: 6 }
          ];
          



// const all = products.map(function(products, index){
//     console.log(products.name)
//     return {name:products.name , stock : products.stock}
// })

// console.log(all)




//filter

// const filter =products.filter((product , index , products)=>{
//     return product.stock > 10
// })

// console.log(filter)
// filter.map(function(product){
//     console.log(product.name , product.stock)
// })



const users = [
    { id: 1, name: "John Doe", age: 28, gender: "Male", email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 24, gender: "Female", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", age: 30, gender: "Female", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", age: 35, gender: "Male", email: "bob@example.com" },
    { id: 5, name: "Charlie Davis", age: 22, gender: "Male", email: "charlie@example.com" },
    { id: 6, name: "Diana Evans", age: 27, gender: "Female", email: "diana@example.com" },
    { id: 7, name: "Ethan Foster", age: 29, gender: "Male", email: "ethan@example.com" },
    { id: 8, name: "Fiona Green", age: 26, gender: "Female", email: "fiona@example.com" },
    { id: 9, name: "George Harris", age: 31, gender: "Male", email: "george@example.com" },
    { id: 10, name: "Hannah Ivy", age: 23, gender: "Female", email: "hannah@example.com" },
    { id: 11, name: "Ian Jackson", age: 32, gender: "Male", email: "ian@example.com" },
    { id: 12, name: "Julia King", age: 25, gender: "Female", email: "julia@example.com" },
    { id: 13, name: "Kevin Lewis", age: 28, gender: "Male", email: "kevin@example.com" },
    { id: 14, name: "Laura Martinez", age: 27, gender: "Female", email: "laura@example.com" },
    { id: 15, name: "Michael Nelson", age: 34, gender: "Male", email: "michael@example.com" },
    { id: 16, name: "Nancy Owens", age: 29, gender: "Female", email: "nancy@example.com" },
    { id: 17, name: "Oscar Parker", age: 33, gender: "Male", email: "oscar@example.com" },
    { id: 18, name: "Paula Quinn", age: 26, gender: "Female", email: "paula@example.com" },
    { id: 19, name: "Ryan Smith", age: 30, gender: "Male", email: "ryan@example.com" },
    { id: 20, name: "Sophia Taylor", age: 24, gender: "Female", email: "sophia@example.com" }
  ];
  
// const femaleUsers =   users.filter((user)=> {
//     return user.gender === "Female"
//   })

// femaleUsers.forEach((user)=>{
//     console.log(user.name , user.gender)
// })
//   console.log(femaleUsers)




// some  / every

// const a= products.every((product)=>{
//      return product.stock > 10
// })

// console.log(a)





//reduce

// const bill = products.reduce(function(acc , current){
//        return acc + current.stock
// } , 0)


// console.log(bill)



// sort 
// const product = products.sort(function(productA , productB){
//     return productA.name.localeCompare(productB.name)
// })

// console.log(product)



const p = products.sort(function(productA, productB){
    return productB.price - productA.price
})


console.log(p)
