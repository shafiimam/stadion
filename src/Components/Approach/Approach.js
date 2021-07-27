import React from "react";
import "./approach.css";
const Approach = (props) => {
  const { title, icon, content } = props.data;
  return (
    <div className="approach">
      <div className="approach-icon">
        <img src={icon} />
      </div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Approach;
