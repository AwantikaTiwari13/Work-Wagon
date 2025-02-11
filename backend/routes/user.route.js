import express from "express";
import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/user.controller.js";
import isAuth from "../middlewares/auth.middleware.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/update-profile").post(isAuth, updateProfile);
router.route("/logout").get(logout);

export default router;
