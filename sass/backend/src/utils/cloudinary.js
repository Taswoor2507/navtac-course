import {v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv";
import CustomError from "./CustomError.js";
import fs from "fs"
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key:process.env.CLOUDINARY_API_KEY || "",
    api_secret:process.env.CLOUDINARY_API_SECRET || ""
})


async function uploadImage(localFilePath){
    try {
        if(!localFilePath){
            throw new CustomError("Image not found" , 404)
        }
        const result  = await cloudinary.uploader.upload(localFilePath , {
            resource_type:"auto"
        })

     fs.unlinkSync(localFilePath)
    return result;

    } catch (error) {
        if(localFilePath){
            fs.unlinkSync(localFilePath)
        }
        throw new CustomError(error.message || "Image upload failed", 500);
    }
}


export default uploadImage;