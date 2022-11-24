import React from "react";
import ic_user from "../../assets/icons/icon-permission.svg";

import "./showInfomation.scss";
export default function ShowInfomation() {
  return (
    <div className="show-infomation">
      <img
        className="show-infomation-avatar"
        src={
          "https://i.pinimg.com/736x/d4/15/95/d415956c03d9ca8783bfb3c5cc984dde.jpg"
        }
        alt=""
      />
      <span className="show-infomation-name">Manh’S Huys</span>
      <span className="show-infomation-permission">
        <img src={ic_user} alt="" />
        Admin
      </span>
    </div>
  );
}
