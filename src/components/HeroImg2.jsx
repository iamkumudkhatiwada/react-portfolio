import "./heroimg2.css";
import React from "react";

const HeroImg2 = ({ heading, para }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
