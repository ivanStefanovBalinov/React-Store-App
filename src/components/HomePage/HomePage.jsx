import React from "react";
import videoBg from "../../assets/video/videoBg.mp4";
import "./HomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import routes from "../../utils/constants";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted className="video-bg"></video>
      <div className="text-zone">
        <h2> Explore Ivan Balinov's React Exam</h2>
        <FontAwesomeIcon className="arrow" icon={faCircleArrowDown} />
        <a href={routes.products.path}>Enter</a>
      </div>
    </div>
  );
};

export default HomePage;
