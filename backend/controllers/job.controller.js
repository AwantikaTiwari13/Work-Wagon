import { Job } from "../models/job.model.js";

//jo admin post karega
export const postJob = async (req, res) => {
  try {
    // console.log("Received Data:", req.body);
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements?.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      createdBy: userId,
    });
    return res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    console.log(error);
  }
};
//for student
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found" });
    }
    return res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
  }
};
// for student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json(job);
  } catch (error) {
    console.log(error);
  }
};

//admin kitne job create kara hai

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ createdBy: adminId });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found" });
    }
    return res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
  }
};
