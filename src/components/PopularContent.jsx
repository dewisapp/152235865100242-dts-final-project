import React from "react";
import "./popularContent.css";
import imageContent from "./images/img-2.png";
import imageList from "./images/img-1.png";

const PopularContent = () => {
  return (
    <div className="popular-container">
      <div className="popular-title">Popular Articles</div>
      <div className="popular-content-wrapper">
        <div className="popular-item-1">
          <div className="item-1-row-1 border-bottom-pop">
            <div className="item-1-img">
              <img src={imageContent} alt="imagecontent" />
            </div>
            <div className="item-1-wrapper">
              <div className="title-item-1">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <span>By Jonathan Burgos</span>
              <div className="subtitle-item-1">
                B Capital Group—an investment firm led by Facebook cofounder
                Eduardo Saverin, legendary investor Howard Morgan and former
                Bain Capital executive Raj Ganguly—raised $250 million from
                outside investors for its early stage venture capital fund.
              </div>
            </div>
          </div>
          {/* BARIS KEDUA */}
          <div className="item-1-row-2">
            <div className="row-2-wrapper">
              <div className="row-2-img">
                <img src={imageContent} alt="imagecontent" />
              </div>
              <div className="row-2-description">
                <div className="row-2-link-wrapper">
                  <div className="link-title">
                    Eduardo Saverin’s B Capital Raises $250 Million For Its
                    Early Stage VC Fund
                  </div>
                  <span>By Jonathan Burgos</span>
                  <div className="link-subtitle">
                    B Capital Group—an investment firm led by Facebook cofounder
                    Eduardo Saverin, legendary investor Howard Morgan and former
                    Bain Capital executive Raj Ganguly—raised $250 million from
                    outside investors for its early stage venture capital fund.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-item-2">
          <div className="item-2-wrapper">
            <div className="item-2-img">
              <img src={imageList} alt="imagelist" />
            </div>
            <div className="item-2-desc">
              <div className="title-item-2">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <div className="subtitle-item-2">
                B Capital Group—an investment firm led by Facebook cofounder
                Eduardo Saverin, legendary investor Howard Morgan and former
                Bain
              </div>
            </div>
          </div>
          <div className="item-2-wrapper">
            <div className="item-2-img">
              <img src={imageList} alt="imagelist" />
            </div>
            <div className="item-2-desc">
              <div className="title-item-2">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <div className="subtitle-item-2">
                B Capital Group—an investment firm led by Facebook cofounder
                Eduardo Saverin, legendary investor Howard Morgan and former
                Bain
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularContent;
