import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

//global && buildin middlewares  middleware configuration
// json
app.use(express.json())   //build in middleware 

// urlencoded
app.use(express.urlencoded({extended:true}))   //builtin middleware 

//  cors 
const whiteList = ["http://localhost:5173"];
 // cookie parser 
 
 const corsOption = {
    origin:function(origin, cb){
         if(whiteList.includes(origin) || !origin){
            cb(null, true)
         }else{
            cb(new Error("blocked by cors policy!"))
         }
      } , 
      methods:["POST" , "GET" , "PUT" , "PATCH" , "DELETE"],
      credentials:true
   }
   
   // implement cors middleware 
   app.use(cors(corsOption))        // thirdparty middleware 
   
   app.use(cookieParser())
   
   // route configure 
   import userRouter from "./router/user.router.js"
   app.use("/api/v1/users" , userRouter)
   
   
  
// export app
export default app