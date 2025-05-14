import AsyncHandler from "../../utils/AsyncHandler.js"
import CustomError from "../../utils/CustomError.js"

// const registerOwner =async function(req,res,next){
//     throw new CustomError("this is my cutom error" , 404 , {data:null})
// }


const registerOwner = AsyncHandler(async function(req,res,next){
      const isregister = false
      if(!isregister){
           return next(new CustomError("this is my custom error" , 606 , null))
      }
      res.json({message:"true"})
})



export  {registerOwner}