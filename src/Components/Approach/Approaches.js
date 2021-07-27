import React from "react";
import peoples from "../../Images/peoples.png";
import f2f from "../../Images/f2f.png";
import cashex from "../../Images/cashex.png";
import list from "../../Images/list.png";
import Approach from "./Approach";
import "./approach.css";
const Approaches = () => {
  const data = [
    {
      title: "No Queuing",
      icon: peoples,
      content: "Avoid standing close to people in a queue.",
    },
    {
      title: "No cash exchange",
      icon: cashex,
      content: "Allow your customers to pay digitally and minimise contact",
    },
    {
      title: "No paper menus",
      icon: list,
      content: "Customers browse the menus through the NOQ app",
    },
    {
      title: "No F2F ordering",
      icon: f2f,
      content: "Customers order through the NOQ app",
    },
  ];
  return (
    <div className="approach-section container">
      <h2>Our aproaches to Covid-19</h2>
      <div className="approaches">
        {data.map((d) => (
          <Approach data={d} key={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Approaches;
