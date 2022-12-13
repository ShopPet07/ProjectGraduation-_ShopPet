import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Information from "../../../components/Information/";
import "./user.scss";
import ic_pencil from "../../../assets/icons/icon-pencil.svg";

const User = () => {
  const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className="user">
      <ToastContainer></ToastContainer>
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
            onClick={() => {
              setUpdateButton(!updateButton);
              if (!updateButton) {
                toast.success("Start updating");
              } else {
                toast.warn("End updating");
              }
            }}
            className="user-top-btn"
          >
            <img src={ic_pencil} alt="" />
            Change information
          </button>
        </div>
      </div>
      <div className="user-primary">
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
  );
};

export default User;
