// function 
// handler
// req, res, next
// async
// data base interacion

import User from "../models/user.model.js"


async function registerUser(req,res,next){
//   get values  
     const {fname, email, password} =req.body
//   chek 
     if(!fname || !email || !password){
        return res.status(400).json({message:"All fields are required"})
     }
// create user 
// mongodb
const user  =  await User.create({fname , email , password})
if(!user){
    return res.status(400).json({message:"Failed to create user"})
}

res.status(201).json({
    message:"user created succesfully ...",
    user:user
 })




}
 
async function loginUser(req,res,next){
                   const {email, password}   =req.body

               if(!password || !email){
                    return res.json({message:"All fields are required"})
               }

     //  user get
     const user = await User.findOne({email:email})
     if(!user){
        return res.status(400).json({message:"user not found"})
     }

//     check password theak hy ya nahi hey

  const isVerify = await  user.comparePassword(password)
  if(!isVerify){
      return res.status(400).json({message:"password is not valid"})
  }
//   generate jwt token 
   const token = user.generateToken()
 console.log(token)
//    set cookie 
res.cookie("token", token, {
   httpOnly: true,
   secure: false,         // true agar HTTPS use kar rahe ho // CSRF ke liye
   maxAge: 24 * 60 * 60 * 1000, // 1 din,
 });



  return res.status(200).json({
    message:"user login successfully",
    user:user,
    token:token
  })




     //  const user  =  User.findOne({})

}
async function deleteUser(req,res){
  return  res.json({message:"user deleted"})
}





export {registerUser,loginUser, deleteUser}





