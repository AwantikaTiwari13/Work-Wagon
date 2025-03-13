import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Full Stack Developer",
  "Graphic Designer",
];
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
              <Button
                onClick={() => searchJobHandler(cat)}
                className="bg-[#6A38C2] text-white rounded"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#6A38C2] text-white rounded-full p-2">
          {"<"}
        </CarouselPrevious>
        <CarouselNext className="bg-[#6A38C2] text-white rounded-full p-2">
          {">"}
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
