import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controller.js";
import m1 from "../middlewares/m1.middleware.js";
import m2 from "../middlewares/m2.middleware.js";

const router = Router();

// router.route("/register").post(m1, m2,registerUser)
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
export default router