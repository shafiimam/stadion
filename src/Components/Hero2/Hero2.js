import React from "react";
import dash from "../../Images/dash.png";
import "./hero2.css";
import leftbg from "../../Images/leftbg.png";
import left1 from "../../Images/left1.png";
import left2 from "../../Images/left2.png";
import suitcase from "../../Images/suitcase.png";
import middle from "../../Images/middle.png";
import dots2 from "../../Images/dots2.png";
import right1 from "../../Images/right1.png";
import right2 from "../../Images/right2.png";
const Hero2 = () => {
  return (
    <div className="hero2-section">
      <h1>Your access to stadian app</h1>
      <div className="hero2">
        <div className="hero-title">
          <p>
            You receive the orders on a mobile device/tablet. You can keep your
            customers notified and let them know when the order is ready for
            collection or out for delivery to them.
          </p>
        </div>
        <div className="hero-image">
          <img src={dash} />
        </div>
      </div>
      <img src={leftbg} className="leftbg" />
      <img src={left1} className="left1" />
      <img src={left2} className="left2" />
      <img src={suitcase} className="suitcase" />
      <img src={middle} className="middle" />
      <img src={right1} className="right1" />
      <img src={right2} className="right2" />
      <img src={dots2} className="dots2" />
    </div>
  );
};

export default Hero2;
