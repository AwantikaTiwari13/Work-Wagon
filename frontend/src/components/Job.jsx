import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  // const jobId = 1;
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const currentTime = new Date(mongodbTime);
    const timeDifference = currentTime - mongodbTime;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)}`}
          days ago
        </p>
        <Button variant="outline" className="rounded-full " size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="job?.company?.logo" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg"> {job?.company?.name}</h1>
          <p className="text-sm text-gray-500"> India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7289b7] font-bold" variant="ghost">
          {job?.salary} lpa
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="rounded-lg"
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#6A38C2] text-white rounded-lg">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
