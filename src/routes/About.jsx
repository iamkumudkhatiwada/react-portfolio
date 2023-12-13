import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Aboutme from "../components/Aboutme";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading={"About"} para={"I would make your job easier"} />
      <Aboutme/>
      <Footer />
    </div>
  );
};

export default About;
