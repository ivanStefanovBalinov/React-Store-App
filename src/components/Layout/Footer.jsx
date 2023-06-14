import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <a
        href="https://github.com/ivanStefanovBalinov/React-Store-App"
        target="_blank"
      >
        <FontAwesomeIcon className="gitHub-icon" icon={faGithub} /> GitHub Link
      </a>
      <p> &#169; React-Exam 2023 Ivan Balinov</p>
    </div>
  );
};

export default Footer;
