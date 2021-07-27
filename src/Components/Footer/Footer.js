import React from "react";
import logo from "../../Images/logo.png";
import "./footer.css";
import downloadApp from "../../Images/downloadApp.png";
import { Link } from "react-router-dom";
import fb from "../../Images/fb.png";
import insta from "../../Images/insta.png";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="site-info">
          <img src={logo} />
          <p>
            Our mission is to enhance your customers’ experience, by making it
            easy to order and re-order. No need to queue up.
          </p>
        </div>
        <div className="right-section">
        <div className="sitemap">
          <p>Sitemap</p>
          <Link to="/blog">Consumer</Link>
          <Link to="/blog">Contact</Link>
        </div>
        <div className="legal">
          <p>Legal</p>
          <Link to="/cookiePolicy">Cokkie Policy</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <Link to="/t&c">Terms an Conditions</Link>
        </div>
        <div className="download-footer">
          <img src={downloadApp} />
        </div>
      </div>
          
        </div>
      <hr></hr>
      <div className="social-copyright">
        <div className="social">
          <img src={fb} />
          <img src={insta} />
          <img src={linkedin} />
          <img src={twitter} />
        </div>
        <p>Copyright © 2021 Stadianapp Pvt. Ltd. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
