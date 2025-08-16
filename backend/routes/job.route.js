import express from "express";
import {
  postJob,
  getAllJobs,
  getJobById,
  getAdminJobs,
} from "../controllers/job.controller.js";
import { isAuth, authorizeRoles } from "../middlewares/auth.middleware.js"; // Import both middlewares

const router = express.Router();

// This route is now protected by both authentication and role-based authorization.
// Only an authenticated 'recruiter' can post a job.
router.route("/post").post(isAuth, authorizeRoles("recruiter"), postJob);

// These routes only require authentication, not a specific role.
// Any authenticated user (recruiter or applicant) can view jobs.
router.route("/get-all-jobs").get(isAuth, getAllJobs);
router.route("/get-job/:id").get(isAuth, getJobById);

// This route should likely be protected for recruiters only as well.
router
  .route("/get-admin-jobs")
  .get(isAuth, authorizeRoles("recruiter"), getAdminJobs);

export default router;
