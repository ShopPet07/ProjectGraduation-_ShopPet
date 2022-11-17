import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";

import { changeTextSearch, changeCategory } from "../../redux/actions";
import "./main.scss";
import logo from "../../assets/images/logo.png";

import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_Favourite from "../../assets/icons/icon-favourite.svg";
import ic_Contact from "../../assets/icons/icon-contact.svg";
import ic_Settings from "../../assets/icons/icon-settings.svg";
import ic_plus from "../../assets/icons/icon-plus.svg";
import ic_Search from "../../assets/icons/icon-search.svg";
import ic_notification from "../../assets/icons/icon-notification.svg";
import ic_menu from "../../assets/icons/icon-menu.svg";
import ic_menuLeft from "../../assets/icons/icon-menuLeft.svg";
import ic_arrow from "../../assets/icons/icon-arrow.svg";
import ic_close from "../../assets/icons/icon-close.svg";

import MainMore from "../../components/MainMore";
const Main = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  useEffect(() => {
    localStorage.getItem("userLogin") ? navigate("/") : navigate("/login");
  }, []);

  const handleToggleTab = (index) => {
    setToggleState(index);
  };
  const handleShowMenu = async () => {
    await setShowMenu(true);
  };
  return (
    <div className="container">
      <div className="main-container">
        <div className={showMenu ? "main-menu active" : "main-menu"}>
          <div className="main-logo">
            <img src={logo} alt="" />
          </div>
          <div className="main-list">
            <ul className="main-item">
              <li>
                {" "}
                <Link
                  to="/"
                  onClick={() => {
                    handleToggleTab(1);
                  }}
                  className={toggleState === 1 ? "active" : ""}
                >
                  <img src={ic_Home} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  onClick={() => {
                    handleToggleTab(2);
                  }}
                  className={toggleState === 2 ? "active" : ""}
                >
                  <img src={ic_User} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleToggleTab(3);
                  }}
                  className={toggleState === 3 ? "active" : ""}
                  to="/mypost"
                >
                  <img src={ic_Favourite} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleToggleTab(4);
                  }}
                  className={toggleState === 4 ? "active" : ""}
                  to="/add"
                >
                  <img src={ic_plus} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    handleToggleTab(5);
                  }}
                  className={toggleState === 5 ? "active" : ""}
                  to="/contact"
                >
                  <img src={ic_Contact} alt="" />
                </Link>
              </li>
            </ul>
            <div
              onClick={() => setShowMenu(false)}
              className="main-notification main-mobile-arrow"
            >
              <img src={ic_arrow} alt="" />
            </div>
          </div>
          <ul className="main-item main-item-last">
            <li>
              <Link
                to="/settings"
                onClick={() => {
                  handleToggleTab(6);
                }}
                className={toggleState === 6 ? "active" : ""}
              >
                <img src={ic_Settings} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
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
            <div className="row-mobile">
              <div
                onClick={handleShowMenu}
                className="main-notification main-menu-left"
              >
                <img src={ic_menuLeft} alt="" />
              </div>
            </div>
            <div className="row-mobile">
              <div className="main-notification ">
                <img src={ic_notification} alt="" />
              </div>
              <div
                onClick={() => setShowMore(!showMore)}
                className="main-notification main-menu-icon"
              >
                <img src={ic_menu} alt="" />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setShowMenu(false);
              setShowMore(false);
            }}
            className="main-content-primary"
          >
            {children}
          </div>
        </div>
        <span
          style={showMore ? { display: "flex" } : { display: "none" }}
          onClick={() => setShowMore(!showMore)}
          className="main-mobile-close-cart main-notification"
        >
          <img src={ic_close} alt="" />
        </span>
        <MainMore active={showMore ? true : false}></MainMore>
      </div>
    </div>
  );
};

export default Main;