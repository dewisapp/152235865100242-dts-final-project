import React from "react";
import "./popularContent.css";
import imageContent from "./images/img-2.png";
import imageList from "./images/img-1.png";

const PopularContent = () => {
  return (
    <div className="popular-container">
      <div className="popular-title">Popular Articles</div>

      <div className="popular-content">
        <div className="popular-content-item column-1">
          <div className="item-description border-bottom-desc">
            <img src={imageList} alt="imagelist" />
            <div className="desc-title">
              Eduardo Saverin’s B Capital Raises $250 Million For Its Early
              Stage VC Fund
            </div>
            <span>By Jonathan Burgos</span>
          </div>
          <div className="item-list">
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
            <div className="item-list-wrapper">
              <div className="item-list-img">
                <img src={imageContent} alt="imagecont" />
              </div>
              <div className="item-list-desc">
                <div className="item-list-title">
                  Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                  Stage VC Fund
                </div>
                <div className="item-list-subtitle">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum totam dolor sit amet...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-content-item column-2">
          <div className="content-item-link">
            <img src={imageContent} alt="imagecontent" />
            <div className="item-link-desc">
              <div className="item-link-title">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <span>By Jonathan Burgos</span>
            </div>
          </div>
          <div className="content-item-link">
            <img src={imageContent} alt="imagecontent" />
            <div className="item-link-desc">
              <div className="item-link-title">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <span>By Jonathan Burgos</span>
            </div>
          </div>
          <div className="content-item-link">
            <img src={imageContent} alt="imagecontent" />
            <div className="item-link-desc">
              <div className="item-link-title">
                Eduardo Saverin’s B Capital Raises $250 Million For Its Early
                Stage VC Fund
              </div>
              <span>By Jonathan Burgos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularContent;
