import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faInfoCircle,faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          EMS
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
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Home
                </Link>
              </li>
              <li className={`nav-item ${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}>
                <Link className="nav-link" to="/adduser">
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Add User
                </Link>
              </li>
              <li className={`nav-item ${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}>
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;