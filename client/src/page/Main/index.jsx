import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import "./main.scss";

const Main = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    localStorage.getItem("userLogin") ? navigate("/") : navigate();
  }, []);

  return (
    <div className="container">
      <div className="main-container">
        <div className={showMenu ? "main-dashboard active" : "main-dashboard"}>
          {!showMenu && (
            <span
              onClick={() => setShowMenu(true)}
              className="menu-button-mobile"
            ></span>
          )}
          <span className="main-logo">
            Xot<span>Bet</span>
          </span>
          <Menu />
        </div>
        <div onClick={() => setShowMenu(false)} className="main-content">
          {location.pathname === "/" ? (
            <Header />
          ) : (
            <span
              onClick={() => window.location.reload(false)}
              className="main-logo"
            >
              Xot<span>Bet</span>
            </span>
          )}
          <main className="main-primary">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Main;
