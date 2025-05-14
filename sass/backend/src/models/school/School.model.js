import mongoose, {Schema} from "mongoose";

const schoolSchema  =  new Schema({
    name:{
        type:String,
        required:true,
    } , 
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    } , 
    contactNumber:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    } , 
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Owner",
        required:true
    }
},{timestamps:true})

const School = mongoose.model("school" , schoolSchema)

export default School