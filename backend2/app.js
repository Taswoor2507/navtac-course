import express from "express"
import cors from "cors"
const app = express();

// cors <cross origin resource sharing>
const whiteListOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin:function(origin,cb){
        if(whiteListOrigins.includes(origin) || !origin ){   
            cb(null , true) // error success
        }else{
            cb(new Error("not allowed by cors"))
        }
    }, 
    credentials:true,
    methods:["GET" , "POST" , "PATCH" , "DELETE"]
}


app.use(cors(corsOptions)) //cors middleware implemnt 

// json
app.use(express.json())

// urlencoded middleware
// name=value&email=abc&password=123
//json
// {"name:value" , "email":"abc" , "password":"123"}
app.use(express.urlencoded({extended:true}))
//route


// app.get("/" ,  (req,res)=>{
//     // handleer
// })
import userRouter from "./routes/user.route.js";
app.use("/api/v1/users", userRouter)

export default app