import mongoose, {Schema} from "mongoose";

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
    },
    isDeleted:{
        typeof:Boolean,
        default:false
    },
    isBlocked:{
        typeof:Boolean,
        default:false
    },
    package:{
        type:String,
        default:"free"
    }

} , {timestamps:true})


const Owner = mongoose.model("owner" , ownerSchema)
export default Owner
