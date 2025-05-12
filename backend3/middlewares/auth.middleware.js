import jwt from "jsonwebtoken"
async function authMiddleware(req,res,next){
 console.log(req)

    next()
}


export default authMiddleware