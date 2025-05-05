// import server from "./server.js"     //  module
// const {server} = require("./server.js")   //commonjs <bydefault >

// server()
// console.log("hello")


// fs
import fs from 'fs'



// const f = fs.readFileSync("./index.txt"  , "utf-8")
// console.log(f)


console.log("start")
setTimeout(()=>{
  console.log("time cb calls")
} ,0)

setImmediate(()=>{
  console.log("immediate cb calls")
})


Promise.resolve().then(()=>{
  console.log("promise cb calls")
})


// fs.readFile("./index.txt"  , "utf-8" , (err, data)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     console.log("file redad succesffuly")
// })


// fs.writeFile("./index.txt" , "hello" , (err, data)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     console.log("file write succesffuly")
// })


// console.log("end")





