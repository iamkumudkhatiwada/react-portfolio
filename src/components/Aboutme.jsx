import "./aboutme.css";
import React from "react";
import { DiJavascript1, DiCss3Full, DiReact, DiHtml5 } from "react-icons/di";

const Aboutme = () => {
  return (
    <div className="about">
      <div className="my-intro">
        <h2>Who Am I</h2>
        <p>
          Welcome to my portfolio website! I'm Kumud, an experienced front-end
          developer with a passion for crafting immersive and user-friendly web
          experiences. With a strong educational background in web development,
          I specialize in bringing designs to life through clean and efficient
          code.
        </p>
      </div>
      <div className="logos">
        <DiHtml5 size={60} style={{ color: "white" }} />
        <DiCss3Full size={60} style={{ color: "white" }} />
        <DiJavascript1 size={60} style={{ color: "yellow" }} />

        <DiReact size={60} style={{ color: "skyblue" }} />
      </div>
    </div>
  );
};

export default Aboutme;
