import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-15 ">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-200 text-[#F83002] font-medium">
          Best Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold mt-4">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam
          inventore, harum doloribus eveniet alias?
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
          <input
            type="text"
            placeholder="Find your dream job"
            className="outline-none border-full w-full"
          />
          <button className="bg-[#6A38C2] text-white px-4 py-2 rounded-r-full">
            <Search className="h-5 w-5 rounded" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
