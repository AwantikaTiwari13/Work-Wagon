import express from "express";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} from "../controllers/job.controller.js";
import isAuth from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/post").post(isAuth, postJob);
router.route("/get-all-jobs").get(isAuth, getAllJobs);
router.route("/get-job/:id").get(isAuth, getJobById);
router.route("/get-admin-jobs").get(isAuth, getAdminJobs);

export default router;
