import express from "express";
import {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} from "../controllers/application.controller.js";
import isAuth from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/apply/:id").get(isAuth, applyJob);
router.route("/get-applied-jobs").get(isAuth, getAppliedJobs);
router.route("/get-applicants/:id").get(isAuth, getApplicants);
router.route("/update-status/:id").post(isAuth, updateStatus);

export default router;
