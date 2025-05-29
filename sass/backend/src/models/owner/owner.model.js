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
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"school",
    } , 
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
        required:false
    },
    refreshToken:{
        type:String,
        default:null
    } , 
    role:{
        type:String,
        enum:["OWNER" , "PRINCIPAL" , "TEACHER" , "STUDENT"],
        default:"OWNER"
    } , 
    principalFields:{
       joinDate: {
           type:Date,
           default:Date.now()
        },
        salary:{
            type:Number,
            required:function(){
                return this.role === "PRINCIPAL"
            }
        }
   , 
   
  


    },
    teacherFields:{
       joinDate: {
           type:Date,
           default:Date.now()
        },
        salary:{
            type:Number,
            required:function(){
                return this.role === "TEACHER"
            }
        }
   } , 
    studentFields:{
       joinDate: {
           type:Date,
           default:Date.now()
        },
        class:{
            type:String, 
            required:function(){
                return this.role === "STUDENT"
            }
        }
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
    return jwt.sign({id:this._id , email:this.email, role:this.role} ,  process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRY
    })
}







const Owner = mongoose.model("owner" , ownerSchema)
export default Owner
