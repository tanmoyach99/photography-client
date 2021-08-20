import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navLink-container d-flex justify-content-between">
          <div className="brand">
            <Link className="navbar-brand" to="/">
              Mary's Photography
            </Link>
          </div>

          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link" to="/albums">
              Albums
            </Link>
          </div>
          <Link to="signUp">
            {" "}
            <button className="btn sign-btn">Sign up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <select name="Photography" id="photography" className="nav-link">
//   <option value="photography">Photography </option>

//   <option value="wedding">
//     <Link to="/wedding"> Wedding </Link>
//   </option>

//   <option value="pre-wedding">
//     <Link to="/pre-wedding"> Pre-Wedding </Link>
//   </option>

//   <option value="honeymoon">
//     <Link to="/honeymoon">Honeymoon</Link>{" "}
//   </option>

//   <option value="pregnancy">
//     <Link to="/pregnancy"> Pregnancy</Link>{" "}
//   </option>

//   <option value="baby">
//     <Link to="/baby">Baby</Link>
//   </option>

//   <option value="tour">
//     <Link to="/tour">Tour</Link>
//   </option>
// </select>;
