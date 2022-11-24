import React from "react";

import ic_back from "../../assets/icons/icon-back.svg";
import ic_search from "../../assets/icons/icon-search.svg";
import ic_category from "../../assets/icons/icon-category.svg";
import "./header.scss";
export default function Header() {
  return (
    <header className="header">
      <span className="header-back">
        <span className="header-back-img">
          <img src={ic_back} alt="" />
        </span>
        Back
      </span>
      <div className="header-more">
        <div className="header-search">
          <span className="header-search-icon">
            <img src={ic_search} alt="" />
          </span>
        </div>
        <span className="header-category">
          <img src={ic_category} alt="" />
        </span>
        <a href="/login" className="header-button">
          Login
        </a>
      </div>
    </header>
  );
}
