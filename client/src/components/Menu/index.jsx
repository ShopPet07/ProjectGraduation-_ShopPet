import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { URL } from "../../api";
import { getCarts } from "../../redux/selectors";
import { ReactComponent as IconHome } from "../../assets/icons/icon-home.svg";
import { ReactComponent as IconUser } from "../../assets/icons/icon-user.svg";
import { ReactComponent as Iconsettings } from "../../assets/icons/icon-settings.svg";
import { ReactComponent as Iconcart } from "../../assets/icons/icon-cart.svg";
import { ReactComponent as Iconlogout } from "../../assets/icons/icon-logout.svg";
import { ReactComponent as Iconreport } from "../../assets/icons/icon-contact.svg";
import style from "./menu.module.scss";
import "./menu.scss";

export default function Menu() {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = React.useState(1);
  const lengthCart = useSelector(getCarts);

  const handleToggleTab = (index) => {
    setToggleState(index);
  };
  const handleLogout = async () => {
    await axios
      .post(`${URL}/api/auth/logout`)
      .then(function (response) {
        console.log(response);
        navigate("/login");
        localStorage.removeItem("userLogin");
        localStorage.removeItem("token");
      })
      .catch(function (error) {
        console.log(error);
      });
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
            {/* <img src={ic_Home} alt="" /> */}
            <IconHome />
          </Link>
          <span>Home</span>
        </li>
        <li className={`${style.styleMenuItem} ${style.cart}`}>
          <Link
            onClick={() => {
              handleToggleTab(2);
            }}
            className={toggleState === 2 ? "active" : ""}
            to={localStorage.getItem("userLogin") ? "/myCart" : "/login"}
          >
            {/* <img src={ic_cart} alt="" /> */}
            <Iconcart />
            <span>{lengthCart.length}</span>
          </Link>
          <span>Cart</span>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            to={localStorage.getItem("userLogin") ? "/user" : "/login"}
            onClick={() => {
              handleToggleTab(3);
            }}
            className={toggleState === 3 ? "active" : ""}
          >
            {/* <img src={ic_User} alt="" /> */}
            <IconUser />
          </Link>
          <span>User</span>
        </li>
        <li className={style.styleMenuItem}>
          <Link
            onClick={() => {
              handleToggleTab(4);
            }}
            className={toggleState === 4 ? "active" : ""}
            to={localStorage.getItem("userLogin") ? "/settings" : "/login"}
          >
            {/* <img src={ic_settings} alt="" /> */}
            <Iconsettings />
          </Link>
          <span>Settings</span>
        </li>
      </ul>
      <ul
        style={{ marginBottom: "-35px" }}
        className={("menu-more", style.styleMenu)}
      >
        {localStorage.getItem("userLogin") && (
          <li className={style.styleMenuItem}>
            <Link onClick={() => handleLogout()}>
              {/* <img src={ic_logout} alt="" /> */}
              <Iconlogout />
            </Link>
            <span>Log out</span>
          </li>
        )}
        <li className={style.styleMenuItem}>
          <Link
            onClick={() => {
              handleToggleTab(6);
            }}
            className={toggleState === 6 ? "active" : ""}
            to={"/contact"}
          >
            {/* <img src={ic_report} alt="" /> */}
            <Iconreport />
          </Link>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
}
