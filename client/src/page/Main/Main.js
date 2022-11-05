import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./main.scss";
import ic_Home from "../../assets/icons/icon-home.svg";
import ic_User from "../../assets/icons/icon-user.svg";
import ic_Favourite from "../../assets/icons/icon-favourite.svg";
import ic_Contact from "../../assets/icons/icon-contact.svg";
import ic_Logout from "../../assets/icons/icon-logout.svg";
import ic_Settings from "../../assets/icons/icon-settings.svg";
import ic_Search from "../../assets/icons/icon-search.svg";

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
              <li
                onClick={() => handleToggleTab(1)}
                className={toggleState === 1 ? "active" : ""}
              >
                {" "}
                <Link to="/">
                  <img src={ic_Home} alt="" />
                </Link>
              </li>
              <li
                onClick={() => handleToggleTab(2)}
                className={toggleState === 2 ? "active" : ""}
              >
                <Link to="/user">
                  <img src={ic_User} alt="" />
                </Link>
              </li>
              <li
                onClick={() => handleToggleTab(3)}
                className={toggleState === 3 ? "active" : ""}
              >
                <Link to="/favourite">
                  <img src={ic_Favourite} alt="" />
                </Link>
              </li>
              <li
                onClick={() => handleToggleTab(4)}
                className={toggleState === 4 ? "active" : ""}
              >
                <Link to="/contact">
                  <img src={ic_Contact} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <img src={ic_Logout} alt="" />
                </Link>
              </li>
            </ul>
            <ul className="main-item main-item-last">
              <li
                onClick={() => handleToggleTab(5)}
                className={toggleState === 5 ? "active" : ""}
              >
                <Link to="/settings">
                  <img src={ic_Settings} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="main-content-header">
            <div className="main-search">
              <input
                placeholder="Search for the product you want"
                type="text"
              />
              <button>
                <img src={ic_Search} alt="" />
              </button>
            </div>
            <div className="main-header-more">
              {/* <span className="main-username">UserName</span> */}
              <div className="main-avatar">
                <img
                  src={
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f6e149d-58c4-4161-b0d2-1bac65dc6059/dbjtlm-70f34cd6-f49c-44df-86ae-7219424d8b49.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNmUxNDlkLTU4YzQtNDE2MS1iMGQyLTFiYWM2NWRjNjA1OVwvZGJqdGxtLTcwZjM0Y2Q2LWY0OWMtNDRkZi04NmFlLTcyMTk0MjRkOGI0OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bQZCAy2KR25vAOna2Fw9yZvwKsc6L9EVY0EX_FlJdw0"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="main-content-primary">{children}</div>
        </div>
        <div className="main-more">cart</div>
      </div>
    </div>
  );
};

export default Main;
