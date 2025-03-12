import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllAdminJobs } from "../redux/jobSlice.js";
import { JOB_API_END_POINT } from "../utils/constant";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        console.log("Fetching all jobs");

        const res = await axios.get(`${JOB_API_END_POINT}/get-admin-jobs`, {
          withCredentials: true, // Ensure credentials are included
        });

        console.log("Response from server:", res);

        if (res.data.success) {
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(
          "Error fetching jobs:",
          error.response?.data || error.message
        );
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]);
};

export default useGetAllAdminJobs;
