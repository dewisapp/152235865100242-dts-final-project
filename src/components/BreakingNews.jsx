import React from "react";
import "./breakingNews.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BreakingNews = () => {
  return (
    <div className="breaking-container">
      <button className="breaking-button">BREAKING NEWS</button>
      <div className="breaking-wrapper">
        <div className="news-item-wrapper">
          <div className="news-link">
            <span className="news-date">2 hour ago</span>
            <div className="news-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              totam dolor sit amet...
            </div>
          </div>
          <div className="news-link">
            <span className="news-date">2 hour ago</span>
            <div className="news-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              totam dolor sit amet...
            </div>
          </div>
          <div className="news-link">
            <span className="news-date">2 hour ago</span>
            <div className="news-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              totam dolor sit amet...
            </div>
          </div>
          <div className="news-link">
            <span className="news-date">2 hour ago</span>
            <div className="news-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              totam dolor sit amet...
            </div>
          </div>
        </div>
        <ArrowForwardIcon className="arrow-right" />
      </div>
    </div>
  );
};

export default BreakingNews;
