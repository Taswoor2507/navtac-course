import Router from "express";
import {imageUpload, registerOwner, resendOtp, verifyOtp} from "../../controllers/owner/owner.controller.js"
import upload from "../../middlewares/multer.middleware.js";
const router = Router();


router.route("/register").post(registerOwner)
router.route("/verify-otp").post(verifyOtp)
router.route("/resend-otp").post(resendOtp)
router.route("/upload").post(upload.single("profile") , imageUpload)
// req
// file :{ }
export default router

// async  --> fn