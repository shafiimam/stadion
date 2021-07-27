import React from "react";
import "./partner.css";
import food1 from "../../Images/food1.png";
import food2 from "../../Images/food2.png";
import burger from "../../Images/burger.png";
import glass from "../../Images/glass.png";
const Partner = () => {
  return (
    <div className="partner-section">
      <div>
        <img src={food1} className="food1" />
        <img src={food2} className="food2" />
        <img src={burger} className="burger" />
        <img src={glass} className="glass" />
      </div>
      <h2>PARTNER WITH US TODAY</h2>
      <p>
        If you have any questions, or would like to partner with us please fill
        out this form and we will be back to you as quick as possible.
      </p>
      <form>
        <div>
          <label for="fname">First Name</label>
          <input type="text" name="fname" />
          <label for="lname">Last Name</label>
          <input type="text" name="lname" />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="text" name="email" />
          <label for="phone">Phone</label>
          <input type="text" name="phone" />
        </div>
      </form>
      <button className="demo-button submit-button">submit</button>
    </div>
  );
};

export default Partner;
