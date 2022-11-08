import React from "react";

import Information from "../../../components/Infomation/Infomation";
import "./user.scss";
import ic_pencil from "../../../assets/icons/icon-pencil.svg";
import ic_avatar from "../../../assets/icons/icon-avatar.png";

const User = () => {
  return (
    <div className="user">
      <div className="user-top">
        <div className="user-top-text">
          <h6 className="user-top-heading ">Account Users</h6>
          <p className="user-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
        <div className="user-top-button">
          <button className="user-top-btn">
            <img src={ic_pencil} alt="" />
            Change information
          </button>
        </div>
      </div>
      <div className="user-primary">
        <h3 className="user-primary-heading">Hellow User, Have a good day</h3>
        <div className="user-primary-infomation">
          <div className="scroll">
            <img src={ic_avatar} className="user-primary-avatar" alt="" />
            <div className="user-primary-personal">
              <h6>Personal Information</h6>
              <div className="row">
                <Information label={"First name"} showInfo="First name" />
                <span></span>
                <Information label={"Last name"} showInfo="Last name" />
              </div>
              <Information label={"Number phone"} showInfo="Last name" />
              <Information label={"Date of Birth"} showInfo="Last name" />
            </div>
            <div className="user-primary-credentials">
              <h6>Credentials</h6>
              <Information label={"Email"} showInfo="Last name" />
              <Information label={"Password"} showInfo="Last name" />
              <Information label={"Cofirm Password"} showInfo="Last name" />
            </div>
          </div>
          <button className="update-infomation">Save</button>
        </div>
      </div>
    </div>
  );
};

export default User;
