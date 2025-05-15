import  mongoose , {Schema} from "mongoose"

const otpSchema = new Schema({
    email:{
        type:Schema.Types.ObjectId,
        ref:"Owner",
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    otpExpiry:{
        type:Date,
        required:true
    },
    lastOtpSentAt:{
        type:Date , 
        required:true
    }
},{timestamps:true})

const Otp = mongoose.model("Otp" , otpSchema)
export default Otp