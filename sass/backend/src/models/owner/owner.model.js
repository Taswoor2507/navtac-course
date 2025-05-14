import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"
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



const Owner = mongoose.model("owner" , ownerSchema)
export default Owner
