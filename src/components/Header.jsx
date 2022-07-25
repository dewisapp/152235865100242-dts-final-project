import React from "react";
import "./header.css";
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
          <StorefrontOutlinedIcon sx={{ fontSize: 40, mr: 2 }} />
          <Link className="logo-name" to="/">
            BLANJAIN
          </Link>
        </div>

        <div className="searchbar-container">
          <form className="form-wrapper">
            <SearchIcon sx={{ fontSize: 30 }} />
            <input
              type="text"
              className="input-text"
              placeholder="cari produk..."
            />
          </form>
        </div>

        {/* <div className="searchbar-wrapper">
          <input
            className="input-text"
            type="text"
            placeholder="cari produk..."
          />
        </div> */}

        <div className="navbar-icons-wrapper">
          <div className="wishlist-wrapper">
            <FavoriteBorderOutlinedIcon sx={{ marginBottom: 1 }} />
            <span>Wishlist</span>
          </div>
          <div className="cart-wrapper">
            <ShoppingCartOutlinedIcon sx={{ marginBottom: 1 }} />
            <span>Keranjang</span>
          </div>
          <div className="account-wrapper">
            <AccountCircleOutlinedIcon sx={{ marginBottom: 1 }} />
            <span>Akun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
