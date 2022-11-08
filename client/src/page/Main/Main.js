import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./main.scss";
import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_Favourite from "../../assets/icons/icon-favourite.svg";
import ic_Contact from "../../assets/icons/icon-contact.svg";
import ic_Settings from "../../assets/icons/icon-settings.svg";
import ic_Search from "../../assets/icons/icon-search.svg";
import ic_avatar from "../../assets/icons/icon-avatar.png";
import ic_location from "../../assets/icons/icon-location.svg";
import ic_notification from "../../assets/icons/icon-notification.svg";
import ic_plus from "../../assets/icons/icon-plus.svg";
import CartItem from "../../components/CartItem/CartItem";

const Main = ({ children }) => {
  const [toggleState, setToggleState] = useState(1);
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
                  to="/favourite"
                >
                  <img src={ic_Favourite} alt="" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleToggleTab(4)}
                  className={toggleState === 4 ? "active" : ""}
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
                onClick={() => handleToggleTab(5)}
                className={toggleState === 5 ? "active" : ""}
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
                  placeholder="Search for the product you want"
                  type="text"
                />
                <button>
                  <img src={ic_Search} alt="" />
                </button>
              </div>
              <select className="main-category">
                <option value="1" key="0">
                  All
                </option>
                <option value="1" key="1">
                  Dogs
                </option>
                <option value="2" key="2">
                  Cats
                </option>
              </select>
            </div>
            <div className="row">
              <div className="main-add">
                <img src={ic_plus} alt="" />
              </div>
              <div className="main-notification">
                <img src={ic_notification} alt="" />
              </div>
            </div>
          </div>
          <div className="main-content-primary">{children}</div>
        </div>
        <div className="main-more">
          <div className="main-profile">
            <div className="main-profile-caption">
              <h5>My Profile</h5>
            </div>
            <div className="main-profile-container">
              <div className="main-profile-info">
                <img src={ic_avatar} alt="" />
                <span>
                  <h6 className="main-profile-name">MR. Manh Hyy’S</h6>
                  <p className="main-profile-permission">User</p>
                  <div className="main-profile-location">
                    <img src={ic_location} alt="" />
                    <span>RG, Kien Giang </span>
                  </div>
                </span>
              </div>
              <div className="main-profile-param">
                <div className="main-profile-param-item">
                  <p>Posts</p>
                  <span>55</span>
                </div>
                <div className="main-profile-param-item">
                  <p>Posts</p>
                  <span>55</span>
                </div>
                <div className="main-profile-param-item">
                  <p>Posts</p>
                  <span>55</span>
                </div>
              </div>
              <a href="/login" className="main-profile-logout">
                Log Out
              </a>
            </div>
          </div>
          <div className="main-cart">
            <div className="main-cart-caption">
              <h5>My Cart</h5>
            </div>
            <div className="main-cart-container">
              <div className="main-cart-list">
                <CartItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU"
                  }
                  name="Lorem ajsdi as..."
                  user="UserName"
                  status="True"
                  price={1200}
                />
                <CartItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU"
                  }
                  name="Lorem ajsdi as..."
                  user="UserName"
                  status="True"
                  price={1200}
                />
                <CartItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU"
                  }
                  name="Lorem ajsdi as..."
                  user="UserName"
                  status="True"
                  price={1200}
                />
                <CartItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU"
                  }
                  name="Lorem ajsdi as..."
                  user="UserName"
                  status="True"
                  price={1200}
                />
                <CartItem
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf70i10lZNUmlA4yU8cIYpwGhM7OzSdS24CNeT96NboOTBd1taUxHIh1lT_gmW97qivcQ&usqp=CAU"
                  }
                  name="Lorem ajsdi as..."
                  user="UserName"
                  status="True"
                  price={1200}
                />
              </div>
              <button className="main-cart-pay">Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
