import { Job } from "../models/job.model.js";
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requiements,
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
      !requiements ||
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
      requiements: requiements?.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      companyId,
      userId,
    });
    return res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    console.log(error);
  }
};
