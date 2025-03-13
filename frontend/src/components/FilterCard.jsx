import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice.js";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Pune"],
  },
  {
    filterType: "Industry",
    array: [
      "Backend Developer",
      "Frontend Developer",
      "Data Science",
      "Machine Learning",
    ],
  },
  {
    filterType: "Salary",
    array: ["6-10 LPA", "10-15 LPA", "15-25 LPA", "25-50 LPA"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const changeHandler = (value) => {
    setSelectedValue(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  return (
    <div className="w-full bg-white rounded-md p-3">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div>
            <h1>{data.file}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label htmlFor={itemId}>{item}</Label>
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
