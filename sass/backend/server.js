import app from  "./app.js";
import dotenv from "dotenv"
import connectDB from "./src/config/db.config.js"
import chalk from "chalk";
// configure dotenv 
dotenv.config();
const PORT = process.env.PORT
// listeming a server 
connectDB()
.then(()=>{
    app.listen(PORT ,  (err)=>{
        if(err){
            throw new Error(`Server running failed due to -->  ${err}`)
        }
        console.log(chalk.red.bold.bgGreen.underline.italic(`Server running at port ${PORT}`))
    })
})
.catch((err)=>{
    throw new Error(`Server running failed due to -->  ${err}`)
})
