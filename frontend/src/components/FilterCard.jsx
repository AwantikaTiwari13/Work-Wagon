import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Mumbai",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Kolkata",
      "Ahmedabad",
      "Gurgaon",
      "Noida",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Software Development",
      "Data Science",
      "Machine Learning",
      "DevOps",
      "Cloud Computing",
      "Cyber Security",
      "Digital Marketing",
      "Business Development",
      "Human Resources",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-3 LPA",
      "3-6 LPA",
      "6-10 LPA",
      "10-15 LPA",
      "15-25 LPA",
      "25-50 LPA",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white rounded-md p-3">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1>{data.file}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
