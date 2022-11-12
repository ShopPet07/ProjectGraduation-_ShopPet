import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./main.scss";
import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_Favourite from "../../assets/icons/icon-favourite.svg";
import ic_Contact from "../../assets/icons/icon-contact.svg";
import ic_Settings from "../../assets/icons/icon-settings.svg";
import ic_avatar from "../../assets/icons/icon-avatar.png";
import ic_location from "../../assets/icons/icon-location.svg";
import CartItem from "../../components/CartItem/CartItem";
import ic_plus from "../../assets/icons/icon-plus.svg";

import { getCarts } from "../../redux/selectors";
import MainHeader from "../../components/MainHeader/MainHeader";
const Main = ({ children }) => {
  const carts = useSelector(getCarts);
  const [toggleState, setToggleState] = useState(1);
  const [cart, setCartItem] = useState({
    userId: 1,
    cartId: [],
  });

  function addCart(id) {
    let addCartitem = [...cart.cartId];

    let checkCart = addCartitem.find((c) => c === id);
    if (checkCart) {
      addCartitem.find((item, index) => {
        if (item === id) {
          addCartitem.splice(index, 1);
        }
        return addCartitem;
      });
      setCartItem((prev) => {
        return {
          ...prev,
          cartId: addCartitem,
        };
      });
    } else {
      addCartitem.push(id);
      setCartItem((prev) => {
        return {
          ...prev,
          cartId: addCartitem,
        };
      });
    }
  }
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
                {carts.map((itemCart) => {
                  return (
                    <span
                      onClick={() => addCart(itemCart.id)}
                      key={itemCart.id}
                    >
                      <CartItem
                        image={itemCart.image}
                        name={itemCart.name}
                        user={itemCart.user}
                        status={itemCart.status}
                        price={itemCart.price}
                      />
                    </span>
                  );
                })}
              </div>
              <div className="main-cart-btn">
                <button className="main-cart-pay">Order</button>
                <button className="main-cart-delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
