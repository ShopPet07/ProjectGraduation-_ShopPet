import React, { useState } from "react";
import { Link } from "react-router-dom";

import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_settings from "../../assets/icons/icon-settings.svg";
import ic_cart from "../../assets/icons/icon-cart.svg";
import ic_logout from "../../assets/icons/icon-logout.svg";
import ic_report from "../../assets/icons/icon-contact.svg";
import style from "./menu.module.scss";
import "./menu.scss";

export default function Menu() {
  const [toggleState, setToggleState] = useState(1);

  const handleToggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="menu">
      <ul className={style.styleMenu}>
        <li className={style.styleMenuItem}>
          <Link
            to="/"
            onClick={() => {
              handleToggleTab(1);
            }}
            className={toggleState === 1 ? "active" : ""}
          >
            <img src={ic_Home} alt="" />
            <span>Home</span>
          </Link>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            onClick={() => {
              handleToggleTab(2);
            }}
            className={toggleState === 2 ? "active" : ""}
            to={localStorage.getItem("userLogin") ? "/mycart" : "/login"}
          >
            <img src={ic_cart} alt="" />
            <span>My cart</span>
          </Link>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            to={localStorage.getItem("userLogin") ? "/user" : "/login"}
            onClick={() => {
              handleToggleTab(3);
            }}
            className={toggleState === 3 ? "active" : ""}
          >
            <img src={ic_User} alt="" />
            <span>Account</span>
          </Link>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            onClick={() => {
              handleToggleTab(4);
            }}
            className={toggleState === 4 ? "active" : ""}
            to={localStorage.getItem("userLogin") ? "/settings" : "/login"}
          >
            <img src={ic_settings} alt="" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <ul
        style={{ marginBottom: "20px" }}
        className={("menu-more", style.styleMenu)}
      >
        <li className={style.styleMenuItem}>
          <Link
            to="/"
            onClick={() => {
              handleToggleTab(5);
            }}
            className={toggleState === 5 ? "active" : ""}
          >
            <img
              style={{ transform: "translateX(3px)" }}
              src={ic_logout}
              alt=""
            />
          </Link>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            onClick={() => {
              handleToggleTab(6);
            }}
            className={toggleState === 6 ? "active" : ""}
            to={"/contact"}
          >
            <img src={ic_report} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
