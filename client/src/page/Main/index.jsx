import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import "./main.scss";

const Main = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("userLogin") ? navigate("/") : navigate();
  }, []);

  return (
    <div className="container">
      <div className="main-container">
        <div className="main-dashboard">
          <span className="main-logo">
            <img
              src={
                "https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"
              }
              alt=""
            />
          </span>
          <Menu />
        </div>
        <div className="main-content">
          <Header />
          <main className="main-primary">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Main;
