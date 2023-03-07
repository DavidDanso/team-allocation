import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="main__nav">
      <nav className="navbar navbar-expand-lg fixed-top menu" id="mainNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img id="logo" src={logo} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">
                  Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
