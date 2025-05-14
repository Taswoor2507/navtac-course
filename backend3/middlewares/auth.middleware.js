import jwt from "jsonwebtoken"
async function authMiddleware(req,res,next){
  try {
    const token  =  cookies.token
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({message:"Unauthorized"})
  }
}


export default authMiddleware