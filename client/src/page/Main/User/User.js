import React, { useState } from "react";

import Information from "../../../components/Infomation/Infomation";
import "./user.scss";
import ic_pencil from "../../../assets/icons/icon-pencil.svg";
// import ic_avatar from "../../../assets/icons/icon-avatar.png";

const User = () => {
  const [updateButton, setUpdateButton] = useState(false);

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
          <button
            onClick={() => setUpdateButton(!updateButton)}
            className="user-top-btn"
          >
            <img src={ic_pencil} alt="" />
            Change information
          </button>
        </div>
      </div>
      <div className="user-primary">
        <div className="personal">
          {/* <img src={ic_avatar} className="user-primary-avatar" alt="" /> */}
          <h6>Personal Information</h6>
          <div className="user-primary-personal">
            <div className="row">
              <Information
                dsb={updateButton ? false : true}
                label={"First name"}
                showInfo="First name"
              />
              <span></span>
              <Information
                dsb={updateButton ? false : true}
                label={"Last name"}
                showInfo="Last name"
              />
            </div>
            <Information
              dsb={updateButton ? false : true}
              label={"Number phone"}
              showInfo="Last name"
            />
            <Information
              dsb={updateButton ? false : true}
              label={"Date of Birth"}
              showInfo="Last name"
            />
          </div>
        </div>
        <div className="credentials">
          <div className="scroll">
            <div className="user-primary-credentials">
              <h6>Credentials</h6>
              <Information
                dsb={updateButton ? false : true}
                label={"Email"}
                showInfo="Last name"
              />
              <Information
                dsb={updateButton ? false : true}
                label={"Password"}
                showInfo="Last name"
              />
              <Information
                dsb={updateButton ? false : true}
                label={"Cofirm Password"}
                showInfo="Last name"
              />
            </div>
          </div>
          {updateButton ? (
            <button
              onClick={() => setUpdateButton(!updateButton)}
              className="update-infomation"
            >
              Save
            </button>
          ) : (
            <button disabled className="update-infomation disable">
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
