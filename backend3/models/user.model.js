import mongoose, { Schema } from "mongoose";

// structure /schema 
const UserSchema = new Schema({
    fname:{type:String  , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
} , {timestamps:true})


// model 
const user  =  mongoose.model("user" , UserSchema)

export default user

// user object
// {
//     fname:"asdjl",
//     emil:"string"
//     passsword:"eqew"
// }