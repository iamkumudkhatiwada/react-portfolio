import "./contactme.css";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="contact">
      <div className="social-box">
        <h2>Reach Me Out</h2>
        <p>Across My Social Media Platforms</p>
        <div className="social-media">
          <a href="https://www.facebook.com/kumud.khatiwada/" target="_blank">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/iamkumud_khatiwada/"
            target="_blank"
          >
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kumud-khatiwada/"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
