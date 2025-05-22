import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
const app = express()

// middlewares implement
// json <in build global middleware> 
app.use(express.json())

// urlencoded <inbuild middleware>
app.use(express.urlencoded({extended:true}))

// cors middleware  <third party middleware  global>
const whiteList = ["http://localhost:5174" , "http://localhost:5173"];
const corsOptions = {
    origin:function(origin, cb){
        if(whiteList.includes(origin) || !origin){
            cb(null , true)
        }else{
            cb(new Error("Not allowed by cors"))    
        }  
    } , 
    credentials:true,
    allowedHeaders:["Content-Type",  "Authorization"] ,
    methods:["GET" , "POST" , "PUT" , "DELETE"] 
}

app.use(cors(corsOptions));

// cookie parser  <third party middleware global >
app.use(cookieParser())



// ouner route setup
import ownerRouter from "./src/routes/owner/owner.route.js";
app.use("/api/v1/owner" , ownerRouter)


// error middleware
import errorMiddleware from "./src/middlewares/error.middleware.js"
app.use(errorMiddleware)

// export app
export default app