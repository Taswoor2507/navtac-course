import Owner from "../../models/owner/owner.model.js";
import School from "../../models/school/School.model.js";
import AsyncHandler from "../../utils/AsyncHandler.js";
import CustomError from "../../utils/CustomError.js";
import emailHtmlTemplate from "../../utils/emailHTMLTemplat.js";
import generateOTP from "../../utils/generateOtp.js"
import Otp from "../../models/otp/otp.model.js";
import sendEmail from "../../utils/sendEmail.js";
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

export { registerOwner };
