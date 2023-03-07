import express from "express";
import { profileController } from "../controllers/profileController.js";
import { loginController } from "../controllers/loginController.js"
const router = express.Router();

router.post("/updateprofile/:idProfile", profileController.updateProfile );
router.post("/login", loginController.login);

export default router