import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
// import { changeTextSearch, changeCategory } from "../../redux/actions";
import { filtersSlice } from "./filterSlide";
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
import ic_notificationFalse from "../../assets/icons/icon-notification-false.svg";
import ic_menu from "../../assets/icons/icon-menu.svg";
import ic_menuLeft from "../../assets/icons/icon-menuLeft.svg";
import ic_arrow from "../../assets/icons/icon-arrow.svg";
import ic_close from "../../assets/icons/icon-close.svg";
import ic_logout from "../../assets/icons/icon-logout.svg";

import MainMore from "../../components/MainMore";
const Main = ({ children }) => {
  // const checkNotification = useSelector(userSelector);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // const [textChange, setTextChange] = useState("");
  // const [categoryChange, setCategoryChange] = useState("All");

  // useEffect(() => {
  //   localStorage.getItem("userLogin") ? navigate("/") : navigate();
  // }, []);

  // const handleTextChange = (e) => {
  //   dispatch(filtersSlice.actions.changeTextSearch(e.target.value));
  //   setTextChange(e.target.value);
  // };
  // const handleCategoryChange = (e) => {
  //   setCategoryChange(e.target.value);
  //   console.log(e.target.value);
  //   dispatch(filtersSlice.actions.changeCategorySearch(e.target.value));
  // };

  const handleToggleTab = (index) => {
    setToggleState(index);
  };
  const handleShowMenu = async () => {
    setShowMenu(true);
    setShowMore(false);
  };
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("userLogin");
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="main-menu">
          <div className="main-logo">
            <img src={logo} alt="" />{" "}
          </div>
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
                to={localStorage.getItem("userLogin") ? "/user" : "/login"}
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
                to={localStorage.getItem("userLogin") ? "/mypost" : "/login"}
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
                to={localStorage.getItem("userLogin") ? "/add" : "/login"}
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
                to={localStorage.getItem("userLogin") ? "/contact" : "/login"}
              >
                <img src={ic_Contact} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <header className="main-content-header"></header>
          <div className="main-content-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// <div className="main-container">
//         <div className={showMenu ? "main-menu active" : "main-menu"}>
//           <div className="main-logo">
//             <img src={logo} alt="" />
//           </div>
//           <div className="main-list">
//             <ul className="main-item">
//               <li>
//                 {" "}
//                 <Link
//                   to="/"
//                   onClick={() => {
//                     handleToggleTab(1);
//                   }}
//                   className={toggleState === 1 ? "active" : ""}
//                 >
//                   <img src={ic_Home} alt="" />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to={localStorage.getItem("userLogin") ? "/user" : "/login"}
//                   onClick={() => {
//                     handleToggleTab(2);
//                   }}
//                   className={toggleState === 2 ? "active" : ""}
//                 >
//                   <img src={ic_User} alt="" />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   onClick={() => {
//                     handleToggleTab(3);
//                   }}
//                   className={toggleState === 3 ? "active" : ""}
//                   to={localStorage.getItem("userLogin") ? "/mypost" : "/login"}
//                 >
//                   <img src={ic_Favourite} alt="" />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   onClick={() => {
//                     handleToggleTab(4);
//                   }}
//                   className={toggleState === 4 ? "active" : ""}
//                   to={localStorage.getItem("userLogin") ? "/add" : "/login"}
//                 >
//                   <img src={ic_plus} alt="" />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   onClick={() => {
//                     handleToggleTab(5);
//                   }}
//                   className={toggleState === 5 ? "active" : ""}
//                   to={localStorage.getItem("userLogin") ? "/contact" : "/login"}
//                 >
//                   <img src={ic_Contact} alt="" />
//                 </Link>
//               </li>
//             </ul>
//             <div
//               onClick={() => setShowMenu(false)}
//               className="main-notification main-mobile-arrow"
//             >
//               <img src={ic_arrow} alt="" />
//             </div>
//           </div>
//           <ul className="main-item main-item-last">
//             <li>
//               <Link
//                 to={localStorage.getItem("userLogin") ? "/settings" : "/login"}
//                 onClick={() => {
//                   handleToggleTab(6);
//                 }}
//                 className={toggleState === 6 ? "active" : ""}
//               >
//                 <img src={ic_Settings} alt="" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="main-content">
//           <div className="main-content-header">
//             <div className="row">
//               <div className="main-search">
//                 <input
//                   value={textChange}
//                   onChange={(e) => handleTextChange(e)}
//                   placeholder="Search for the product you want"
//                   type="text"
//                 />
//                 <button>
//                   <img src={ic_Search} alt="" />
//                 </button>
//               </div>
//               <select
//                 value={categoryChange}
//                 onChange={handleCategoryChange}
//                 className="main-category "
//               >
//                 <option className="main-category-item" value="All" key="0">
//                   All
//                 </option>
//                 <option className="main-category-item" value="dog" key="1">
//                   Dogs
//                 </option>
//                 <option className="main-category-item" value="cat" key="2">
//                   Cats
//                 </option>
//               </select>
//             </div>
//             <div className="row-mobile">
//               <div
//                 onClick={handleShowMenu}
//                 className="main-notification main-menu-left"
//               >
//                 <img src={ic_menuLeft} alt="" />
//               </div>
//             </div>
//             <div className="row-mobile">
//               <div className="main-notification ">
//                 {checkNotification.notification ? (
//                   <img src={ic_notification} alt="" />
//                 ) : (
//                   <img src={ic_notificationFalse} alt="" />
//                 )}
//               </div>
//               <div
//                 onClick={() => {
//                   setShowMore(!showMore);
//                   setShowMenu(false);
//                 }}
//                 className="main-notification main-menu-icon"
//               >
//                 <img src={ic_menu} alt="" />
//               </div>
//               {localStorage.getItem("userLogin") ? (
//                 <div
//                   onClick={() => handleLogout()}
//                   className="main-notification main-menu-icon"
//                 >
//                   <img src={ic_logout} alt="" />
//                 </div>
//               ) : (
//                 <div className="main-notification main-menu-icon">
//                   <a href="/login">Login</a>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div
//             onClick={() => {
//               setShowMenu(false);
//               setShowMore(false);
//             }}
//             className="main-content-primary"
//           >
//             {children}
//           </div>
//         </div>
//         <span
//           style={showMore ? { display: "flex" } : { display: "none" }}
//           onClick={() => setShowMore(!showMore)}
//           className="main-mobile-close-cart main-notification"
//         >
//           <img src={ic_close} alt="" />
//         </span>
//         {localStorage.getItem("userLogin") ? (
//           <MainMore active={showMore ? true : false}></MainMore>
//         ) : (
//           <div
//             onClick={() => handleLogout()}
//             className="main-notification desktop-icon"
//           >
//             Login
//           </div>
//         )}
