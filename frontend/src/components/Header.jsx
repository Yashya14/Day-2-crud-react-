import React,{useState} from "react";
import {Link} from "react-router-dom"

const Header = () => {
    const [activeTab,setActiveTab] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Employee
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
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => setActiveTab("Home")}>
                <Link className={`nav-link ${activeTab === "Home" ? "active" : ""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={() => setActiveTab("About")}>
                <Link className={`nav-link ${activeTab === "About" ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" onClick={() => setActiveTab("adduser")}>
                <Link className={`nav-link ${activeTab === "adduser" ? "active" : ""}`} to="/adduser">
                  Add User
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
