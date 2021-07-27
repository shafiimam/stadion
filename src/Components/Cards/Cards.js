import React from "react";
import calender from "../../Images/calender.png";
import cutlery from "../../Images/cutlery.png";
import address from "../../Images/address.png";
import Card from "../Card/Card";
import "./cards.css";
const Cards = () => {
  const data = [
    {
      title: "Event",
      icon: calender,
      content:
        "We are now a necessity for events and venues in allowing them to reopen Events",
    },
    {
      title: "Foods",
      icon: cutlery,
      content:
        "We are now a necessity for events and venues in allowing them to reopen Events",
    },
    {
      title: "Venue",
      icon: address,
      content:
        "We are now a necessity for events and venues in allowing them to reopen Events",
    },
  ];
  return (
    <div className="card-container-section container">
      <h2>HOW DO CUSTOMERS GAIN ACCESS?</h2>
      <div className="card-container">
        {data.map((d) => (
          <Card data={d} key={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
