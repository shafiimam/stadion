import React from "react";
import appMobile from "../../Images/appMobile.png";
import appstore from "../../Images/appstore.png";
import qr from "../../Images/qr.png";
import redleaf1 from "../../Images/redleaf1.png";
import redleaf2 from "../../Images/redleaf2.png";
import "./DownloadApp.css";
const DownloadApp = () => {
  return (
    <div>
      <img src={redleaf1} className="redleaf1" />
      <img src={redleaf2} className="redleaf2" />
      <h1 className="main-text">How do customers gain access?</h1>
      <div className="downloadApp">
        <div className="download">
          <img src={qr} className="qr" />
          <img src={appMobile} className="appMobile" />
          <img src={appstore} />
        </div>
        <div className="info">
          <h2>Download the stadion app</h2>
          <p>
            The QR code will direct customers straight into your personalised
            page, where they can view all your products.
          </p>
          <p>
            Customers purchase items on the app in a cashless and contactless
            manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
