import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,FaInstagram 
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div
      className="home__socials"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a
        href="https://www.facebook.com/chelsea.pham.9847"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/justbeingchelseagirl/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/chelsea-pham-quynh-anh/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
      >
        chelsea.pham1912@gmail.com
      </a>
    </div>
  );
};

export default HeaderSocials;
