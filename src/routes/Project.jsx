import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading={"PROJECTS"} para="Come see my recent work" />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Project;
