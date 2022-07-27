import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container border">
      <span className="navbar-link">Home</span>
      <span className="navbar-link">News</span>
      <span className="navbar-link">Sports</span>
      <span className="navbar-link">Entertainment</span>
      <span className="navbar-link">Business</span>
      <span className="navbar-link">Fashion</span>
      <span className="navbar-link">Lifestyle</span>
    </div>
  );
};

export default Navbar;
