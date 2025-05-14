import Router from "express";
import {registerOwner} from "../../controllers/owner/owner.controller.js"
const router = Router();


router.route("/register").post(registerOwner)

export default router