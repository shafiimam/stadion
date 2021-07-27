import React from "react";
import hero from "../../Images/hero.png";
import dots from "../../Images/dots.png";
import leaf from "../../Images/leaf.png";
import leaf2 from "../../Images/leaf2.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
    <div className="hero">
      
       <img src={dots} className="dots" />
       <img src={leaf} className="leaf1" />
       <img src={leaf2} className="leaf2" />

      <div className="container">
        <div className="grid-2">
          <div className="left_section">
            <div className="content">
                <h1>Mobile Ordering</h1>
                <h1>Platform For Food</h1>
                <p>
                  Our Mission is to enhance your customers experience, by makinh it easy
                  to order and re-order. No need to queue up
                </p>
                <button className="demo-button">Free demo</button>
            </div>
          </div>

          <div className="righ_section">
           <img src={hero} />
          </div>
        </div>
      </div>
    </div>
    </>
    // <div className="hero">
    //   <img src={dots} className="dots" />
    //   <img src={leaf} className="leaf1" />
    //   <img src={leaf2} className="leaf2" />
    //   <div className="hero-title">
    //     <h1>Mobile Ordering</h1>
    //     <h1>Platform For Food</h1>
    //     <p>
    //       Our Mission is to enhance your customers experience, by makinh it easy
    //       to order and re-order. No need to queue up
    //     </p>
    //     <button className="demo-button">Free demo</button>
    //   </div>
    //   <div className="hero-image">
    //     <img src={hero} />
    //   </div>
    // </div>
  );
};

export default Hero;
