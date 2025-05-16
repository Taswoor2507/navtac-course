import Owner from "../../models/owner/owner.model.js";
import School from "../../models/school/School.model.js";
import AsyncHandler from "../../utils/AsyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import emailHtmlTemplate from "../../utils/emailHTMLTemplat.js";
import generateOTP from "../../utils/generateOtp.js"
import Otp from "../../models/otp/otp.model.js";
import sendEmail from "../../utils/sendEmail.js";
import cleanOtp from "../../helpers/CleanOtp.js";
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
    profile,
    plan,
    name,
    city,
    address,
    contactNumber,
    type,
  } = req.body;

  // field check

  //    owner create

  const owner = await Owner.create({
    fullName,
    email,
    phone,
    password,
    profile,
    plan,
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







export { registerOwner , verifyOtp, resendOtp};
