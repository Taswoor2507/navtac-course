import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
// function verifyToken(req,res,next){
//   const token  = req.cookies.token;
//   if(!token){
//     return next(new CustomError("Token not found", 401));
//   }

//   try {
//       const decode =  jwt.verify(token , process.env.JWT_SECRET);
//       if(decode){
//         req.user = decode;
//         next();
//       }
//   } catch (error) {
   
//         // if token is expired
//         if(error.name === "TokenExpiredError"){
//           return next(new CustomError("Token is expired" , 401));
//         }

//       return next(new CustomError("Token is not valid" , 401));
//   }

// //    {id:1,  email:"ewqewe}





// }

// headeers
function verifyToken(req,res,next){
const bearerToken  =  req.headers.authorization;
console.log(req.headers , "HEADERSSSSSSSSSSSSS")
console.log("TOKEN FROM HEADER" , bearerToken)
   if(!bearerToken){
     return next(new CustomError("Token not found", 401));
   }

   try {
    const token = bearerToken.replace("Bearer " , "");
    console.log(token , "BR")
    console.log("env variable " , process.env.JWT_SECRET)
    const decode  = jwt.verify(token , process.env.JWT_SECRET);
    console.log(decode , "DECODED TOKEN")
    if(!decode){
      return next(new CustomError("Token is not valid" , 401));
    }
    req.user = decode;  // {id , email , exp}
    next();


   } catch (error) {
    // expiry token error handling 
    if(error.name === "TokenExpiredError"){
      return next(new CustomError("Token is expired" , 403));
    }
      return next(new CustomError("Token is not valid" , 405));
   }
}

export default verifyToken;