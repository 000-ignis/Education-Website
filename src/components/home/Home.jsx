import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import CourseHome from "../allcourses/CourseHome";
// import Testimonial from "./testimonal/Testimonal";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard/>
      <CourseHome />
      
    </>
  );
};

export default Home;
