import React from "react";
import "../App.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>©{currentYear} Team Allocation</p>
    </div>
  );
};

export default Footer;
