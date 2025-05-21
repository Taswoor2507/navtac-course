import Router from "express";
import {imageUpload, login, registerOwner, resendOtp, verifyOtp} from "../../controllers/owner/owner.controller.js"
import upload from "../../middlewares/multer.middleware.js";
const router = Router();


router.route("/register").post(upload.single("profile"), registerOwner)
router.route("/verify-otp").post(verifyOtp)
router.route("/resend-otp").post(resendOtp)
router.route("/login").post(login)
router.route("/upload").post(upload.single("profile") , imageUpload)
// req
// file :{ }
export default router

// async  --> fn