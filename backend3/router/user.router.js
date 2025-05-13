import { Router } from "express";
import { deleteUser, loginUser, registerUser } from "../controller/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// router.route("/register").post(m1, m2,registerUser)
router.route("/delete").get(  authMiddleware , deleteUser)
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
export default router