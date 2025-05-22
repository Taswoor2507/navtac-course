import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
function verifyToken(req,res,next){
  const token  = req.cookies.token;
  if(!token){
    return next(new CustomError("Token not found", 401));
  }

  try {
      const decode =  jwt.verify(token , process.env.JWT_SECRET);
      if(decode){
        req.user = decode;
        next();
      }
  } catch (error) {
   
        // if token is expired
        if(error.name === "TokenExpiredError"){
          return next(new CustomError("Token is expired" , 401));
        }

      return next(new CustomError("Token is not valid" , 401));
  }

//    {id:1,  email:"ewqewe}





}

export default verifyToken;