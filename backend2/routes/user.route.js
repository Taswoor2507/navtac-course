import { Router } from "express";
import { deleteUser, getUser, registerUser } from "../controllers/user.controller.js";
const router = Router()

router.route("/").get(getUser)
router.route("/register").post(registerUser)
router.route("/delete").delete(deleteUser)
export default router