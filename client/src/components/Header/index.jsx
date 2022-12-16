import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { filtersSlice } from "../../page/Main/filterSlide";
import { ReactComponent as IcSearch } from "../../assets/icons/icon-search.svg";
import { ReactComponent as IcCategory } from "../../assets/icons/icon-category.svg";
import { ReactComponent as IcCategoryDog } from "../../assets/icons/icon-categoryDog.svg";
import { ReactComponent as IcCategoryCat } from "../../assets/icons/icon-categoryCat.svg";
import { ReactComponent as IcNotification } from "../../assets/icons/icon-notification.svg";
import { ReactComponent as IcMessage } from "../../assets/icons/icon-message.svg";
import { userSelector } from "../../redux/selectors";

import "./header.scss";
export default function Header() {
  const username = useSelector(userSelector);

  const dispatch = useDispatch();
  const [textChange, setTextChange] = React.useState("");
  const [category, setCategory] = React.useState(0);

  const handleTextChange = (e) => {
    dispatch(filtersSlice.actions.changeTextSearch(e.target.value));
    setTextChange(e.target.value);
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
      <div className="header-primary">
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
          {category === 0 ? (
            <IcCategory />
          ) : category === 1 ? (
            <IcCategoryDog />
          ) : (
            <IcCategoryCat />
          )}
        </span>
        <div className="header-search">
          <input
            value={textChange}
            onChange={(e) => {
              handleTextChange(e);
            }}
            type="text"
            placeholder="Search..."
          />
          <span className="header-search-icon">
            <IcSearch />
          </span>
        </div>
      </div>
      {!localStorage.getItem("userLogin") && (
        <a href="/login" className="header-button">
          Login
        </a>
      )}
      <div className="header-more">
        {!localStorage.getItem("userLogin") && (
          <a href="/register" className="header-button header-register">
            Register
          </a>
        )}
        {!localStorage.getItem("userLogin") && (
          <a href="/login" className="header-button header-login">
            Login
          </a>
        )}
        {localStorage.getItem("userLogin") && (
          <>
            <span className="header-category message">
              <IcMessage />
            </span>
            <span className="header-category notification">
              <IcNotification />
            </span>
          </>
        )}
        {localStorage.getItem("userLogin") && (
          <div className="header-user">
            <img
              src={
                "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg"
              }
              alt=""
            />
            <span>{username.username}</span>
          </div>
        )}
      </div>
    </header>
  );
}
