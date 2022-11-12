import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ic_Search from "../../assets/icons/icon-search.svg";
import ic_notification from "../../assets/icons/icon-notification.svg";

import { changeTextSearch, changeCategory } from "../../redux/actions";

const MainHeader = () => {
  const dispatch = useDispatch();
  const [textChange, setTextChange] = useState("");
  const [categoryChange, setCategoryChange] = useState("All");
  const handleTextChange = (e) => {
    dispatch(changeTextSearch(e.target.value));
    setTextChange(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategoryChange(e.target.value);
    dispatch(changeCategory(e.target.value));
  };
  return (
    <div className="main-content-header">
      <div className="row">
        <div className="main-search">
          <input
            value={textChange}
            onChange={(e) => handleTextChange(e)}
            placeholder="Search for the product you want"
            type="text"
          />
          <button>
            <img src={ic_Search} alt="" />
          </button>
        </div>
        <select
          value={categoryChange}
          onChange={handleCategoryChange}
          className="main-category "
        >
          <option className="main-category-item" value="All" key="0">
            All
          </option>
          <option className="main-category-item" value="Dogs" key="1">
            Dogs
          </option>
          <option className="main-category-item" value="Cats" key="2">
            Cats
          </option>
        </select>
      </div>
      <div className="main-notification">
        <img src={ic_notification} alt="" />
      </div>
    </div>
  );
};

export default MainHeader;
