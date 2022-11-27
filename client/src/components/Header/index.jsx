import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filtersSlice } from "../../page/Main/filterSlide";
import ic_back from "../../assets/icons/icon-back.svg";
import ic_search from "../../assets/icons/icon-search.svg";
import ic_category from "../../assets/icons/icon-category.svg";
import ic_categoryDog from "../../assets/icons/icon-categoryDog.svg";
import ic_categoryCat from "../../assets/icons/icon-categoryCat.svg";
import "./header.scss";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = React.useState(false);
  const [textChange, setTextChange] = React.useState("");
  const [category, setCategory] = React.useState(0);

  const handleTextChange = (e) => {
    dispatch(filtersSlice.actions.changeTextSearch(e.target.value));
    setTextChange(e.target.value);
    console.log(e.target.value);
  };
  const handleCategoryChange = (e) => {
    dispatch(
      filtersSlice.actions.changeCategorySearch(
        e === 0 ? "All" : e === 1 ? "Dog" : "Cat"
      )
    );
  };
  return (
    <header className="header">
      <span onClick={() => navigate(-1)} className="header-back">
        <span className="header-back-img">
          <img src={ic_back} alt="" />
        </span>
        Back
      </span>
      <div className="header-more">
        <div className="header-search">
          <input
            value={textChange}
            onChange={(e) => {
              handleTextChange(e);
            }}
            className={input ? "active" : ""}
            type="text"
            placeholder="Search..."
          />
          <span onClick={() => setInput(!input)} className="header-search-icon">
            <img src={ic_search} alt="" />
          </span>
        </div>
        <span
          onClick={() => {
            if (category < 2) {
              setCategory(category + 1);
              handleCategoryChange(category + 1);
            } else {
              setCategory(0);
              handleCategoryChange(0);
            }
          }}
          className="header-category"
        >
          <img
            src={
              category == 0
                ? ic_category
                : category === 1
                ? ic_categoryDog
                : ic_categoryCat
            }
            alt=""
          />
        </span>
        {!localStorage.getItem("userLogin") && (
          <a href="/login" className="header-button">
            Login
          </a>
        )}
      </div>
    </header>
  );
}
