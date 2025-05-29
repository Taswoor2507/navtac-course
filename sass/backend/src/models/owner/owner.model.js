import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"
import CustomError from "../../utils/CustomError.js";
import jwt from "jsonwebtoken"
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
    },
    refreshToken:{
        type:String,
        default:null
    }

} , {timestamps:true})



ownerSchema.pre("save" , async function(){
    if(!this.isModified("password")){
        return ;
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

// generate jwt token   
ownerSchema.methods.generateToken = function(){
    return jwt.sign({id:this._id , email:this.email} ,  process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRY
    })
}







const Owner = mongoose.model("owner" , ownerSchema)
export default Owner
