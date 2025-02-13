import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full " size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/3xDrIdES3qHkd8t-ZNV2VeM2QhFUNl90bcIP58nIw0E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly92bWV6Rkhtczdq/cjE3YVRoc2pISkh6/ejdPRnM9LzB4MDo5/NjB4OTYwL2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy83OS83OTE3/Ny9hdHRhY2htZW50/Xzc5MTc3MDM1.jpeg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500"> India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          nobis laudantium. Error soluta ex autem.
        </p>
      </div>
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
      <div className="flex items-center gap-4 mt-4">
        <Button className="rounded-lg" variant="outline">
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
