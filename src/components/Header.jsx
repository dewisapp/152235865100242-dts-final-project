import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link className="logo-name" to="/home">
          ForUs
        </Link>

        <div className="search">
          <form className="search-wrapper">
            <input type="text" className="input-text" placeholder="Search..." />
            <button className="search-button">
              <SearchIcon className="search-icon" />
            </button>
          </form>
        </div>

        <div className="header-icons-wrapper">
          <span className="header-icon user-icon">Dewy</span>
          <NotificationsNoneIcon className="header-icon" />
          <div className="account-wrapper ">
            <AccountCircleOutlinedIcon />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
