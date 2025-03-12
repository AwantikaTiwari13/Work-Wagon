import React from "react";
import Navbar from "./shared/Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import LatestJobs from "./LatestJobs.jsx";
import Footer from "./Footer.jsx";
import useGetAllJobs from "../hooks/useGetAllJobs.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
