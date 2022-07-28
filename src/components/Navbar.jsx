import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="navbar-container border">
      <div className="menu-bar">
        <MenuIcon />
      </div>
      <div className="navbar-wrapper">
        <div className="navbar-link ">Home</div>
        <div className="navbar-link">News</div>
        <div className="navbar-link">Sports</div>
        <div className="navbar-link">Entertainment</div>
        <div className="navbar-link">Business</div>
        <div className="navbar-link">Fashion</div>
        <div className="navbar-link">Lifestyle</div>
      </div>
    </div>
  );
};

export default Navbar;
