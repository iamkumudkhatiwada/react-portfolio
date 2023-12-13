import "./footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Kirtipur-10</p>
              <p>Kathmandu</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9862602473
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              kmdkhatiwada@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the services</h4>
          <p>
            Designed to meet the clients front-end demands. Let's dicuss your
            Ideas
          </p>
          <div className="social">
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
    </div>
  );
};

export default Footer;
