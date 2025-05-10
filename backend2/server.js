import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3033;

app.listen(PORT , (err)=>{
   if(err){
    console.log(err)
    return 
   }
   console.log(`server is running on port ${PORT}`)
})