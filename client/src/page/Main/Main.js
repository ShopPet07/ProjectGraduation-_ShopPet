import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import HomePage from "./Home/Home";
import UserPage from "./User/User";
import ContactPage from "./Contact/Contact";
import FavouritePage from "./Contact/Contact";
import SettingsPage from "./Settings/Settings";
import "./main.scss";

const Main = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="main-menu">
          <ul>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourite">Favourite</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <div className="main-more">cart</div>
      </div>
    </div>
  );
};

export default Main;
