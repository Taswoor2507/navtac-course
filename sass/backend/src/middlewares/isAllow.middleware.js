import CustomError from "../utils/CustomError.js";

function isAllow(...allowedRoles){
    return (req,res,next)=>{
        console.log(req.user , "USER")
        if(!req.user ||  !allowedRoles.includes(req.user.role)){  //["OWNER"]   //["TEACHER"]
            return next(new CustomError("You are not allowed to access this route" , 403))
        }
        next()
    }
}


export default isAllow