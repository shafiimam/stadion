import React from "react";
import appMobile from "../../Images/appMobile.png";
import appstore from "../../Images/appstore.png";
import qr from "../../Images/qr.png";
import redleaf1 from "../../Images/redleaf1.png";
import redleaf2 from "../../Images/redleaf2.png";
import "./DownloadApp.css";
const DownloadApp = () => {
  return (
    <div className="downloadSection">
      {/* <img src={redleaf1} className="redleaf1" />
      <img src={redleaf2} className="redleaf2" /> */}
      <h1 className="main-text">How do customers gain access?</h1>

      <div className="container">
        <div className="grid-2">
          <div className="left_section">
            <div className="download">
              <div className="qr_app">
                <img src={qr} className="qr" />
                <img src={appMobile} className="appMobile" />
                <img src={appstore} />
              </div>
            </div>
          </div>

          <div className="right_section">
            <div className="info">
              <div className="content">
                <h2>Download the stadion app</h2>
                <p>
                  The QR code will direct customers straight into your
                  personalised page, where they can view all your products.
                </p>
                <p>
                  Customers purchase items on the app in a cashless and
                  contactless manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
