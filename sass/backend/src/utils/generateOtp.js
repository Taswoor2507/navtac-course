import otpGenerator from "otp-generator";


function generateOTP(){
    return otpGenerator.generate(6,{
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
        digits:true
    })

   // 928344
}


export default generateOTP