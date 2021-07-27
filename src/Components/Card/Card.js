import React from "react";
import "./card.css";
const Card = (props) => {
  const { title, icon, content } = props.data;
  return (
    <div className="card">
      <p className="title">
        {title} <img src={icon} className="card-icon" />
      </p>
      <p>{content}</p>
      <button className="card-button">see more</button>
    </div>
  );
};

export default Card;
