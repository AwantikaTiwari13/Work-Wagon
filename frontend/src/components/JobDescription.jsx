import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
          <div className="flex gap-2 items-center mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              12 Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              Part Time
            </Badge>
            <Badge className="text-[#7289b7] font-bold" variant="ghost">
              24 lpa
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
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
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">New York, USA</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            We are looking for a skilled frontend developer...
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            3+ years in frontend development
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">24 lpa</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applications:{" "}
          <span className="pl-4 font-normal text-gray-800">150</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            1st October 2023
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
