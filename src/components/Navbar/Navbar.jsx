import React from "react";
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
            <Link className="nav-link" to="/">
              Features
            </Link>
            <Link className="nav-link" to="/">
              Pricing
            </Link>
            <select name="Photography" id="photography" className="nav-link">
              <option value="photography">Photography </option>
              <option value="wedding">Wedding </option>
              <option value="pre-wedding">Pre-Wedding </option>
              <option value="honeymoon">Honeymoon </option>
              <option value="pregnancy">Pregnancy </option>
              <option value="religious">Religious </option>
              <option value="tour">Tour</option>
            </select>
          </div>
          <button className="btn sign-btn">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
