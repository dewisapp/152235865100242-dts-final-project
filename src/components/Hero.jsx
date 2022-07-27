import React from "react";
import "./hero.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import imageEdition from "./images/img-1.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-edition-wrapper">
        <span className="hero-edition">Asia Edition</span>
        <KeyboardArrowDownIcon className="arrow-down" />
      </div>

      <div className="hero-content">
        <div class="hero-item row-1">
          <img src={imageEdition} alt="imageEdition" />
          <div className="hero-item-title">
            Eduardo Saverin’s B Capital Raises $250 Million For Its Early Stage
            VC Fund
          </div>
          <span className="hero-item-author">By Jonathan Burgos</span>
          <div className="hero-item-subtitle">
            B Capital Group—an investment firm led by Facebook cofounder Eduardo
            Saverin, legendary investor Howard Morgan and former Bain Capital
            executive Raj Ganguly—raised $250 million from outside investors for
            its early stage venture capital fund.
          </div>
        </div>
        <div className="hero-item">
          <div>Top Headlines</div>
          <div className="headline-link">
            <span>
              Tycoon Lim Kang Hoo’s Ekovest To Build $447 Million Railway
              Linking Malaysia...
            </span>
            <span>
              Samsung Galaxy S22 Ultra Review: It’s A Galaxy Note, And That’s
              Great News...
            </span>
            <span>
              Panasonic To Build Second EV Battery Factory In U.S. To Expand
              Beyond Tesla..
            </span>
            <span>
              Warburg Pincus-Backed ESR To Build Maiden Logistics Hub In Hong
              Kong...
            </span>
            <span>
              Samsung Galaxy S22 Ultra Review: It’s A Galaxy Note, And That’s
              Great News...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
