import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
// structure /schema 
const UserSchema = new Schema({
    fname:{type:String  , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
} , {timestamps:true})


// bcrypt a  password
UserSchema.pre("save"  , async function(){
if(!this.isModified("password")) return
    try {
        const salt  = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password , salt)
    } catch (error) {
        throw new Error("passwrod encryption failed!!!")
    }
})


// verify password with hash in
UserSchema.methods.comparePassword = async function(enterPasswrod){
   try {
    console.log(enterPasswrod, this.password)
    return await bcrypt.compare(enterPasswrod , this.password)
   } catch (error) {
    throw new Error("Password comparison failed");
   }
}


// model 
const User  =  mongoose.model("user" , UserSchema)

export default User

// user object
// {
//     fname:"asdjl",
//     emil:"string"
//     passsword:"eqew"
// }