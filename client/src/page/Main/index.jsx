import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
// import { changeTextSearch, changeCategory } from "../../redux/actions";

import ShowInformation from "../../components/AvatarComponents";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import "./main.scss";

const Main = ({ children }) => {
  // const checkNotification = useSelector(userSelector);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // const [categoryChange, setCategoryChange] = useState("All");

  useEffect(() => {
    localStorage.getItem("userLogin") ? navigate("/") : navigate();
  }, []);

  // const handleShowMenu = async () => {
  //   setShowMenu(true);
  //   setShowMore(false);
  // };
  // const handleLogout = () => {
  //   navigate("/login");
  //   localStorage.removeItem("userLogin");
  // };
  return (
    <div className="container">
      <div className="main-container">
        <div className="main-dashboard">
          <h5 className="main-logo">XopBet</h5>
          <ShowInformation />
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
