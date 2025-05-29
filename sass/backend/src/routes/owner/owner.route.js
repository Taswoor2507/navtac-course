import Router from "express";
import {imageUpload, login, logout, me, refresh, registerOwner, resendOtp, verifyOtp} from "../../controllers/owner/owner.controller.js"
import upload from "../../middlewares/multer.middleware.js";
import verifyToken from "../../middlewares/verifyToken.middleware.js";
const router = Router();


router.route("/register").post(upload.single("profile"), registerOwner)
router.route("/verify-otp").post(verifyOtp)
router.route("/resend-otp").post(resendOtp)
router.route("/login").post(login)
router.route("/me").get(verifyToken ,  me)
router.route("/upload").post(upload.single("profile") , imageUpload)
router.route("/refresh").get(refresh)
router.route("/logout").get( verifyToken ,logout)
// req
// file :{ }
export default router

// async  --> fn