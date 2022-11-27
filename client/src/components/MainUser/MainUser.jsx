import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ic_avatar from "../../assets/icons/icon-avatar.png";
import ic_location from "../../assets/icons/icon-location.svg";
import { userSelector } from "../../redux/selectors";
import { API } from "../../api";
import { fetchUser } from "../../page/Main/User/userSlice";

const MainUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userLogin")) {
      dispatch(fetchUser());
    }
  }, []);

  const user = useSelector(userSelector);

  const LogOut = () => {
    axios
      .post(`${API}/api/auth/logout`)
      .then((res) => {
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-profile">
      <div className="main-profile-caption">
        <h5>My Profile</h5>
      </div>
      <div className="main-profile-container">
        <div className="main-profile-info">
          <img src={ic_avatar} alt="" />
          <span>
            <h6 className="main-profile-name">{user.username}</h6>
            <p className="main-profile-permission">User</p>
            <div className="main-profile-location">
              <img src={ic_location} alt="" />
              <span>{user.address}</span>
            </div>
          </span>
        </div>
        <a href="/login" onClick={LogOut} className="main-profile-logout">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default MainUser;
