// instance

import express from "express"
import cors from "cors"
const app = express();

app.use(cors({
    origin:"*"
}))
// get 

app.get("/profile" , (req,res)=>{ //localhost:4040/
    console.log(res)
    res.json({
        id:21
    })
})


// server 
app.listen(4040 , (err)=>{
    if(err){
        console.log(err)
        return;
    }

    console.log("server is running on port 4040")
})




