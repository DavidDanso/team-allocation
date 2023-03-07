import React from "react";
import "./Header.css";

const Header = ({ selectedTeam, employeeCount }) => {
  return (
    <div className="header">
      <div className="container">
        <h1>Planet Lizard Team Members Allocation</h1>
        <p>
          {selectedTeam} has {employeeCount().length} member(s)
        </p>
      </div>
    </div>
  );
};

export default Header;
