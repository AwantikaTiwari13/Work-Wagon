import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Pen } from "lucide-react";
import { Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

// const skills = ["React", "Node", "Express", "MongoDB", "Firebase", "AWS"];
const isHaveResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://imgs.search.brave.com/3xDrIdES3qHkd8t-ZNV2VeM2QhFUNl90bcIP58nIw0E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly92bWV6Rkhtczdq/cjE3YVRoc2pISkh6/ejdPRnM9LzB4MDo5/NjB4OTYwL2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy83OS83OTE3/Ny9hdHRhY2htZW50/Xzc5MTc3MDM1.jpeg" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="text-right "
            variant="outline"
          >
            <Pen />
          </button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-4 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills?.length > 0 ? (
              user?.profile?.skills?.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>no skills added</span>
            )}
          </div>
        </div>
        <div className="grid w-full mas-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">
            {user?.profile?.resumeOriginalName}
          </Label>
          {isHaveResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              view resume
            </a>
          ) : (
            <span>no resume added</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied jobs</h1>
        {/* application table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
