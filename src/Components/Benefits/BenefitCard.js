import React from "react";
import "./benefit.css";
const BenefitCard = (props) => {
  const { title, icon, content } = props.data;
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <img src={icon} />
      </div>
      <p className="benefit-title">{title}</p>
      <p className="benefit-content">{content}</p>
    </div>
  );
};

export default BenefitCard;
