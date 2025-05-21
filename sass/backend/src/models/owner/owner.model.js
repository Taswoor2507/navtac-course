import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"
import CustomError from "../../utils/CustomError.js";
const ownerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    isVerify:{
       type:Boolean,
       default:false
    },
    profile:{
        type:String,
        required:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    plan:{
        type:String,
        default:"free"
    }

} , {timestamps:true})



ownerSchema.pre("save" , async function(){
    if(!this.isModified("password")){
        next()
    }
   try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
   } catch (error) {
      next(error)
   }
})
// compare password
ownerSchema.methods.comparePassword = async function (password){
   try {
     return await bcrypt.compare(password , this.password)
   } catch (error) {
    throw new CustomError("Password comparison failed" , 500)
   }
} 


const Owner = mongoose.model("owner" , ownerSchema)
export default Owner
