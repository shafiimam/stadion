import React from "react";
import subscription from "../../Images/subscription.png";
import people from "../../Images/people.png";
import network from "../../Images/network.png";
import BenefitCard from "./BenefitCard";
import "./benefit.css";
import redleaf1 from "../../Images/redleaf1.png";
import redleaf2 from "../../Images/redleaf2.png";
const Benefits = () => {
  const data = [
    {
      title: "Increase your sales",
      icon: subscription,
      content:
        "Advertise your product, increase your reach and enhanced customer experience, leading to more orders and re-orders",
    },
    {
      title: "Less staff costs",
      icon: people,
      content:
        "Require less waiters and staff taking orders, leading to improved margins and reduction in human error.",
    },
    {
      title: "Manage your business",
      icon: network,
      content:
        "Manage your business effectively by making live changes to prices, introduce promotions and put items in and out of stock",
    },
  ];
  return (
    <div className="benefit-section">
      <img src={redleaf1} className="benefit-redleaf1" />
      <img src={redleaf2} className="benefit-redleaf2" />
      <h1>Benefits</h1>

      <div className="benefits container">
        {data.map((d) => (
          <BenefitCard data={d} key={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
