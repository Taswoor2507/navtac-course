import Owner from "../../models/owner/owner.model.js";
import School from "../../models/school/School.model.js";
import AsyncHandler from "../../utils/AsyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import emailHtmlTemplate from "../../utils/emailHTMLTemplat.js";
import generateOTP from "../../utils/generateOtp.js"
import Otp from "../../models/otp/otp.model.js";
import sendEmail from "../../utils/sendEmail.js";
import cleanOtp from "../../helpers/CleanOtp.js";
import uploadImage from "../../utils/cloudinary.js";
import chalk from "chalk";
import jwt from "jsonwebtoken"
import generateRefreshToken from "../../utils/generateRefreshToken.js";
import principalWelcomeEmailTemplate from "../../utils/principalEmailTemplate.js";
import ApiFeatures from "../../utils/ApiFeatures.js";
// const registerOwner =async function(req,res,next){
//     throw new CustomError("this is my cutom error" , 404 , {data:null})
// }

const registerOwner = AsyncHandler(async function (req, res, next) {
  // get fields
  const {
    fullName,
    email,
    phone,
    password,
    plan,
    name,
    city,
    address,
    contactNumber,
    type,
    profile
  } = req.body;
  console.log(req.body)
let secureUrl
  const {file} = req
    if(file){
         const localpath = file.path
         try {
                   const imageUpload =  await uploadImage(localpath);
                    if(!imageUpload){
                      return next(new CustomError("Image upload failed" , 500))
                    }

                    secureUrl = imageUpload.secure_url
                    console.log(secureUrl , "SECURE URL")
         } catch (error) {
          return next(new CustomError("Image upload failed" , 500))
         }
    }





  // field check

  //    owner create

  const owner = await Owner.create({
    fullName,
    email,
    phone,
    password,
    profile,
    plan,
    profile:secureUrl|| undefined
  });


  if(!owner){
      return next(new CustomError("Owner not created" , 400))
  }

console.log(owner  , "OWNER")

      // school create 
    const school =  await School.create({
        name:name,
        city:city,
        address:address,
        contactNumber:contactNumber,
        type:type,
        owner:owner._id
    })

    if(!school){
        return next(new CustomError("School not created" , 400))
    }
 // generate otp 
 const ownerOtp = generateOTP();

//  email send 
  try {
    const info = await sendEmail(owner.email , "OTP verication" , emailHtmlTemplate(owner.fullName , ownerOtp))
    if(info){
      const otp = await Otp.create({
        email:owner._id,
        otp:ownerOtp,
        otpExpiry:Date.now() + 10 * 60 * 1000,
        lastOtpSentAt:Date.now()
      })
      if(!otp){
        return next(new CustomError("Otp not created" , 422))
      }
    }
  } catch (error) {
    return next(new CustomError("Email send failed" , 423))
  }











    res.status(201).json({
      message:"OWNER AND SCHOOL CREATED SUCCESFFULY ",
      status:1,
      data :{
            owner , school
      }
    })












});


// verify otp
const verifyOtp = AsyncHandler(async(req,res,next)=>{
    const {otp , email} = req.body
    // email check
     const isEmailExist = await Owner.findOne({email}) 
     if(!isEmailExist){
        return next(new CustomError("Email not found" , 404))
     }

    //  
    if(isEmailExist){
       const otpData = await Otp.findOne({email:isEmailExist._id})

       if(!otpData){
        return next(new CustomError("Otp not found" , 404))
       }

       if(otpData.otpExpiry < Date.now()){
        return next(new CustomError("Otp expired" , 404))     
       }

       if(otpData.otp !== otp){
        return next(new CustomError("Otp not matched" , 404))
       }

     await Owner.updateOne({_id:isEmailExist._id} , {isVerify:true})
    //  clear otp
     await Otp.deleteOne({email:isEmailExist._id})

     res.json({
        message:"OTP VERIFIED SUCCESFULLY",
        status:1
     })


    }
    

})





// resend-otp

const resendOtp = AsyncHandler(async(req,res,next)=>{
   const { email } = req.body;

// check
   const isEmailExist = await Owner.findOne({email})
   if(!isEmailExist){
    return next(new CustomError("Email not found" , 404))
   }

  //  check user already verify or not 
     if(isEmailExist.isVerify){
        return next(new CustomError("User already verify" , 404))
     }

    // 
  // clean otp
  
  try {
    await cleanOtp(isEmailExist._id)
    // generate otp
    const newOTP = generateOTP()

    // Email send 
       const result  = await sendEmail(isEmailExist.email , "OTP resend verication" , emailHtmlTemplate(isEmailExist.fullName , newOTP))
       if(!result){
        return next(new CustomError("Email not send" , 404))
       }

      //  create otp object on otp model 
     const otp =  await Otp.create({
        email:isEmailExist._id,
        otp:newOTP,
        otpExpiry:Date.now() + 10 * 60 * 1000,
        lastOtpSentAt:Date.now()
      })

      if(!otp){
        return next(new CustomError("Otp not created" , 422))
      }

      res.json({
        message:"Otp resend successfully",
        status:1
      })
      
    } catch (error) {
        return next(error)
    }






})



const imageUpload = AsyncHandler(async(req,res,next)=>{
         const {file} = req
         console.log(file , "FILE")
         if (!file){
           return next(new CustomError("Image not found" , 404))
         }
       
          // file upload to cloudinary
          const imageObj = await uploadImage(file.path)
          if(!imageObj){
            return next(new CustomError("Image upload failed" , 500))
          }
          
          console.log(imageObj , "IMAGE OBJ")


         res.json({
            message:"Image uploaded successfully",
            status:1,
         })
})




// login user 
const login = AsyncHandler(async(req,res,next)=>{
  const {email , password} = req.body
  // check email and password 
  if(!email || !password){
    return next(new CustomError("EMAIL AND PASSWORD REQUIRED" , 404))
  }
  // check email 
  const isEmailExist =  await Owner.findOne({email});
  if(!isEmailExist){
    return next(new CustomError("Email not found" , 404))
  }
  // check password
  const isPasswordMathed = await isEmailExist.comparePassword(password)

  if(!isPasswordMathed){
    return next(new CustomError("Email or password is incorrect " , 404))
  }

  // check user is verify or not
  if(!isEmailExist.isVerify){
    return next(new CustomError("Please verify your account first before login" , 401))
  }


  // generate  access token
   const token = isEmailExist.generateToken();
   console.log(chalk.green.bold("JWT TOKEN " ,  token))

if(!token){
  return next(new CustomError("Token not generated" , 500))
}
// refresh token create 
const refreshToken = generateRefreshToken({id:isEmailExist._id , email : isEmailExist.email})
if(!refreshToken){
  return next(new CustomError("Failed to genrate refresh token " ,  400))
}

console.log(chalk.red.bold("REFRESHTOKEN" ,  refreshToken))
// store refresh token in db
 try {
     await Owner.findOneAndUpdate({id:isEmailExist._id},  {refreshToken})
 } catch (error) {
    return next(new CustomError("Fail to store refresh token in db" , 401))
 }


//  set refresh token in cookies 
res.cookie("refresh" , refreshToken, {
    httpOnly:true,
  secure:true,
  sameSite:"none",
  path:"/",
  expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), //15 days
})




// res.cookie("token" , token , {
//   httpOnly:true,
//   secure:true,
//   sameSite:"none",
//   path:"/",
//   expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //7 days
// })

  // login user 
  res.json({
    status:1,
    message:"Login successfully",
    data:{
      user:isEmailExist
    },
    accessToken : token
  })

})



// verify account 

// const verifyAccount = AsyncHandler(async(req,res,next)=>{
     
// })


// user me 
const me  =  AsyncHandler(async(req,res,next)=>{
    const {email} =  req.user;
    const isUserExist = await Owner.findOne({email});
    if(!isUserExist){
      return next(new CustomError("User not found" , 404))
    }
    
    res.json({
      status:1 ,
     message:"your profile object" , 
     data:isUserExist
    })

})



// refresh access token using refresh token 
const refresh = AsyncHandler(async(req,res,next)=>{
  // get refresh token 
  const refreshToken = req.cookies.refresh
  console.log(chalk.black.bold.bgWhite("REFRESH TOKEN GET FROM COOKIES " , refreshToken));
  if(!refreshToken){
    return next(new CustomError("Refresh Token not found " , 404))
  }

  // check refresh token 

  try {
    console.log(process.env.REFRESH_TOKEN_SECRET  , "ENV VARIBALE ")
  const decodeUserData  = jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)
  console.log(chalk.black.bold.bgWhite("Decoded data" ,  decodeUserData))
   
  if(!decodeUserData){
    return next(new CustomError("Invalid refresh token " , 401));
  }

  const isValidRefreshToken  =  await Owner.findOne({email:decodeUserData.email});
   if(!isValidRefreshToken){
    return next(new CustomError("Invalid refresh token " , 401))
   } 


   // generate new access token 
    const newAccessToken =  isValidRefreshToken.generateToken();


 if(!newAccessToken){
    return next(new CustomError("failed to refresh access token " , 400))
 }

   console.log(chalk.black.bold.bgWhite("New accesstoken" , newAccessToken))


   res.json({
    message:"Token refreesh successfully ..",
    status:1, 
    accessToken:newAccessToken , 
    data:isValidRefreshToken  // user object
  })


  } catch (error) {

    res.clearCookie("refresh" , {
      httpOnly:true,
      secure:true,
      sameSite:"none",
      path:"/",
      expires: new Date(Date.now())
    })
    if(error.name === "TokenExpiredError"){
      return next(new CustomError("Refresh token expired" , 401))
    }
    return next(new CustomError("Invalid refresh token" , 401));
  }
 
  // check refresh token store is avaliable in db 
  
  
})


// logout 

const logout = AsyncHandler(async (req,res,next)=>{
   const user = req?.user
   if(!user){
     return next(new CustomError("User not found" , 404))
   }
   
  //  search user in database 
     const isUserExist =  await Owner.findOne({email:user.email});

     if(!isUserExist){
      return next(new CustomError("User not found" , 404))
     }

    //  null refresh token field in db 
    isUserExist.refreshToken = null;
    await isUserExist.save();
   
// clear cookies 
    res.clearCookie("refresh" , {
      httpOnly:true,
      secure:true,
      sameSite:"none",
      path:"/",
      expires: new Date(Date.now())
    })
    res.json({
      message:"Logout successfully",
      status:1
    })
})

let addPrincipal=  AsyncHandler(async(req,res,next)=>{
    let {fullName,
    email,
    phone,
    password,
    } =  req.body

//  fields checks 
if(!fullName || !email || !phone ){
  return next(new CustomError("All fields are required" , 400))
}
  password =  "12345678as"

  //  check owner
    const owner =  req?.user;
    if(!owner){
      return next(new CustomError("User not found" , 404))
    }
// check in db
    const ownerExist =   await Owner.findOne({email:owner.email});
    if(!ownerExist){
      return next(new CustomError("User not found" , 404))
    }
    console.log(owner , "OWNER")
    // get school from owner
      const schoolData =  await School.findOne({owner:ownerExist._id});
      if(!schoolData){
        return next(new CustomError("School not found" , 404))
      }
    // create principal
    const principal =  await Owner.create({
      fullName , password ,  email , phone , profile:"" , role:"PRINCIPAL" , school:schoolData._id , principalFields:{salary:100000} 
    })

  if(!principal){
      return next(new CustomError("Principal not created" , 500))
  }
  const wholeData =  await principal.populate("school")
  console.log(wholeData , "WHOLE DATA")
   
  try {
     sendEmail(principal.email , "Welcome to Schoolify" ,  principalWelcomeEmailTemplate(principal.fullName, wholeData.school.name, password))
  } catch (error) {
    return next(new CustomError("Email send failed" , 500))
  }

~
  res.status(201).json({
    message:"Principal created successfully",
    status:1,
    data:principal
  })



  



})


// getuser

const getUser = AsyncHandler(async(req,res,next)=>{
  const {userId }= req?.params
  
  const user  =  await Owner.findById(userId)
  if(!user){
    return next(new CustomError("User not found" , 404))
  }

  res.status(200).json({
    message:"User found successfully",
    status:1,
    data:user
  })
      

})


// get all 
const getAll  =  AsyncHandler(async(req,res,next)=>{
     const requestQuery =  new ApiFeatures(Owner.find() , req.query).search(["email" ,  "fullName"])
     console.log( "REQUESTQUERY", requestQuery)

     const all = await requestQuery.query
     const totalUsers = await requestQuery.query.clone().countDocuments()
     if(!all || all.length < 1 ){
       return next(new CustomError("No user found" , 404))
     }

     res.json({
       message:"Users found successfully",
       totalUsers,
       status:1,
       data:all
     })
})







export { registerOwner , verifyOtp, resendOtp, imageUpload, me, getAll , refresh , login , getUser , logout, addPrincipal};
