import React from "react";
import "./breakingNews.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BreakingNews = () => {
  return (
    <div className="breaking-container">
      <button className="breaking-button">BREAKING NEWS</button>
      <div className="news-wrapper">
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

        <div className="swipper-right">
          <ArrowForwardIcon
            className="arrow-right"
            sx={{ fontSize: 30, opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
