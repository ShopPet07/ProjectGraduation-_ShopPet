import React, { useState } from "react";

import Information from "../../../components/Infomation/Infomation";
import "./user.scss";
import ic_pencil from "../../../assets/icons/icon-pencil.svg";

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
        <div className="user-image">
          <img
            src="https://www.24petwatch.com/content/24petwatch/us/en/_jcr_content/root/container/container/container_11073310_c/container_hero_copy/container_image/image.coreimg.85.1024.png/1663861300485/cat-image-new-529x540.png"
            alt=""
          />
        </div>
        <div className="personal">
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
              label={"Address"}
              showInfo="68 - KG"
            />
            <Information
              dsb={updateButton ? false : true}
              label={"Sex"}
              showInfo="Female"
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
