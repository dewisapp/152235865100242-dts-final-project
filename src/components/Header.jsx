import React from "react";
import "./header.module.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-header">
          <StorefrontOutlinedIcon />
          <Link to="/">BLANJAIN</Link>
        </div>

        <div className="searchbar-wrapper">
          <SearchIcon />
          <input
            className="input-text"
            type="text"
            placeholder="cari produk..."
          />
        </div>

        <div className="navbar-icons">
          <div className="wishlist-wrapper">
            <FavoriteBorderOutlinedIcon />
            <span>Wishlist</span>
          </div>
          <div className="cart-wrapper">
            <ShoppingCartOutlinedIcon />
            <span>Keranjang</span>
          </div>
          <div className="account-wrapper">
            <AccountCircleOutlinedIcon />
            <span>Akun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
