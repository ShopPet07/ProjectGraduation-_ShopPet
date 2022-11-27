import React from "react";
import ic_user from "../../assets/icons/icon-permission.svg";

import "./showInformation.scss";
export default function ShowInformation() {
  return (
    <div className="show-information">
      <img
        className="show-information-avatar"
        src={
          "https://i.pinimg.com/736x/d4/15/95/d415956c03d9ca8783bfb3c5cc984dde.jpg"
        }
        alt=""
      />
      <span className="show-information-name">Manh’S Huys</span>
      <span className="show-information-permission">
        <img src={ic_user} alt="" />
        Admin
      </span>
    </div>
  );
}
