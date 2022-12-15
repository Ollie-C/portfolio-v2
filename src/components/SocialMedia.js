import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/oliver-cross/"
        className="app__social-icon"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ollie-C" className="app__social-icon">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
