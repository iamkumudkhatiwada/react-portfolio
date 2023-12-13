import "./HeroImg.css";
import web from "../assets/web.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={web} alt="intro-img" />
      </div>
      <div className="content">
        <p>hi, i am a freelancer</p>
        <h1>Front-End Developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
