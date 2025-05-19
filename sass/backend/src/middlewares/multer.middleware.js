import multer from "multer";
import path  from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import CustomError from "../utils/CustomError.js";


const filePath =  fileURLToPath(import.meta.url); // backend/src/middlewares/multer.middleware.js   
const __dirname =  dirname(filePath) //backend/src/middlewares/
const uploadPath = path.join(__dirname , "../../public/profiles")


const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        console.log(filePath , "FILE PATH"),
        console.log(__dirname ,"DIRNAME")
        console.log()

        cb(null ,  uploadPath )
    } ,
    // logo.png
    //278946238462834624-logo.png
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const checkTypes = (req,file,cb)=>{
    const allowTypes  = /png|jpg|jpeg|gif|svg/ ;   //regex
    const imageType = allowTypes.test(path.extname(file.originalname).toLowerCase())  //Jpg
    const minmeType = allowTypes.test(file.minmeType)  // image/png
 if(imageType && minmeType){
    cb(null , true)
 }else{
    cb(new CustomError("Only image files are allowed", 400), false)
 }



}


const upload =  multer({storage , fileFilter:checkTypes , limits:{fileSize:1024*1024*2}}) // 5mb

export default upload;