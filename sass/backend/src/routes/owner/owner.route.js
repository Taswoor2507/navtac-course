import Router from "express";
import {registerOwner, verifyOtp} from "../../controllers/owner/owner.controller.js"
const router = Router();


router.route("/register").post(registerOwner)
router.route("/verify-otp").post(verifyOtp)
export default router

// async  --> fn