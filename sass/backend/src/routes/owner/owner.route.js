import Router from "express";
import {registerOwner, resendOtp, verifyOtp} from "../../controllers/owner/owner.controller.js"
const router = Router();


router.route("/register").post(registerOwner)
router.route("/verify-otp").post(verifyOtp)
router.route("/resend-otp").post(resendOtp)
export default router

// async  --> fn