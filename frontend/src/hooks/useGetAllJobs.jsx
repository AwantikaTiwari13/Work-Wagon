import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllJobs } from "../redux/jobSlice.js";
import { JOB_API_END_POINT } from "../utils/constant";
import { useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        console.log("Fetching all jobs");

        const res = await axios.get(
          `${JOB_API_END_POINT}/get-all-jobs?keyword=${searchedQuery}`,
          {
            withCredentials: true, // Ensure credentials are included
          }
        );

        console.log("Response from server:", res);

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(
          "Error fetching jobs:",
          error.response?.data || error.message
        );
      }
    };

    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
