import CustomError from "./CustomError.js";
import jwt from  "jsonwebtoken"
function generateRefreshToken(payload){
    if(!payload){
        throw new CustomError("No playload found" , 404)
    }

  const refreshToken =  jwt.sign(payload , process.env.REFRESH_TOKEN_SECRET , {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
   
  if(!refreshToken){
    throw new CustomError("Failed to genrate refresh token " , 401)
  }

  return refreshToken
   
}

export default generateRefreshToken