import express from "express"
import cors from "cors"
const app = express()

//global && buildin middlewares  middleware configuration
// json
app.use(express.json())

// urlencoded
app.use(express.urlencoded({extended:true}))

//  cors 
const whiteList = ["http://localhost:5173"];
const corsOption = {
    origin:function(origin, cb){
         if(whiteList.includes(origin) || !origin){
            cb(null, true)
         }else{
            cb(new Error("blocked by cors policy!"))
         }
        } , 
        methods:["POST" , "GET" , "PUT" , "PATCH" , "DELETE"],
        credencials:true, 
    }

    // implement cors middleware 
    app.use(cors(corsOption))

// route configure 




// export app
export default app