import React from "react";
import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";

const companyArray = [];

const PostJob = () => {
  const { companies } = useSelector((store) => store.company);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany?._id });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);

    try {
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          action=""
          className="p-8 max-w-4xl border border-gray-200 shadow-lg sonner-loader rounded-md"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Title</Label>
              <input
                type="text"
                name="title"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.title}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <textarea
                name="description"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <textarea
                name="requirements"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.requirements}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Salary</Label>
              <input
                type="text"
                name="salary"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.salary}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <input
                type="text"
                name="location"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <input
                type="text"
                name="jobType"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.jobType}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Experience</Label>
              <input
                type="text"
                name="experience"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.experience}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>No of Position</Label>
              <input
                type="number"
                name="position"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.position}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Company ID</Label>
              <input
                type="text"
                name="companyId"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                value={input.companyId}
                onChange={changeEventHandler}
              />
            </div>
            {companies.length > 0 && (
              <Select onValueChange={selectChangeHandler}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-white">
                    {companies.map((company) => {
                      return (
                        <SelectItem value={company?.name?.toLowerCase()}>
                          {company.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>

          <Button type="submit" className="w-full bg-black text-white mt-4">
            Post New Job
          </Button>
          {companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              * Please register your company first and then post the job *
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
