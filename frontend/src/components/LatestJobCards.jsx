import React from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/description/${job._id}`);
      }}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100"
    >
      <div>
        <h1 className="font-md text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7289b7] font-bold" variant="ghost">
          {job?.salary} lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
