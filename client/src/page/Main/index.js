import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./main.scss";
import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_Favourite from "../../assets/icons/icon-favourite.svg";
import ic_Contact from "../../assets/icons/icon-contact.svg";
import ic_Settings from "../../assets/icons/icon-settings.svg";
import ic_plus from "../../assets/icons/icon-plus.svg";

import MainHeader from "../../components/MainHeader/MainHeader";
import MainCart from "../../components/MainCart/MainCart";
import MainUser from "../../components/MainUser/MainUser";
const Main = ({ children }) => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  useEffect(() => {
    localStorage.getItem("userLogin") ? navigate("/") : navigate("/login");
  }, []);

  const handleToggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="main-container">
        <div className="main-menu">
          <div className="main-logo">Logo</div>
          <div className="main-list">
            <ul className="main-item">
              <li>
                {" "}
                <Link
                  to="/"
                  onClick={() => handleToggleTab(1)}
                  className={toggleState === 1 ? "active" : ""}
                >
                  <img src={ic_Home} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  onClick={() => handleToggleTab(2)}
                  className={toggleState === 2 ? "active" : ""}
                >
                  <img src={ic_User} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleToggleTab(3)}
                  className={toggleState === 3 ? "active" : ""}
                  to="/mypost"
                >
                  <img src={ic_Favourite} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleToggleTab(4)}
                  className={toggleState === 4 ? "active" : ""}
                  to="/add"
                >
                  <img src={ic_plus} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleToggleTab(5)}
                  className={toggleState === 5 ? "active" : ""}
                  to="/contact"
                >
                  <img src={ic_Contact} alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="main-item main-item-last">
            <li>
              <Link
                to="/settings"
                onClick={() => handleToggleTab(6)}
                className={toggleState === 6 ? "active" : ""}
              >
                <img src={ic_Settings} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <MainHeader></MainHeader>
          <div className="main-content-primary">{children}</div>
        </div>
        <div className="main-more">
          <MainUser></MainUser>
          <MainCart></MainCart>
        </div>
      </div>
    </div>
  );
};

export default Main;
