import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";
import { JOB_API_END_POINT } from "../utils/constant";
import { setSingleJob } from "../redux/jobSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { APPLICATION_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { useState } from "react";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id || false
  ); // to check if the user has applied or not, if applied then disable the button
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      console.log("Response from server:", res);
      if (res.data.success) {
        setIsApplied(true); //update local state
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); //update redux state, real time update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || error.message);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        console.log("Fetching all jobs");

        const res = await axios.get(`${JOB_API_END_POINT}/get-job/${jobId}`, {
          withCredentials: true, // Ensure credentials are included
        });

        console.log("Response from server:", res);

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(
          "Error fetching jobs:",
          error.response?.data || error.message
        );
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex gap-2 items-center mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position} Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7289b7] font-bold" variant="ghost">
              {singleJob?.salary}
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          className={` ${
            isApplied
              ? "bg-black cursor-not-allowed text-white rounded-full"
              : "bg-[#5f32ad] hover:bg-[#7289b7] text-white rounded-full"
          }`}
        >
          {isApplied ? "already applied" : "Apply now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        {/* <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.role}
          </span>
        </h1> */}
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.location}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experienceLevel}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applications:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications?.length}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            12th August 2021
            {/* // dynamic kardena */}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
