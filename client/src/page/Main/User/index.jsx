import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import Information from "../../../components/Information/";
import "./user.scss";
import ic_plus from "../../../assets/icons/icon-plus.svg";

const User = () => {
  const [updateButton, setUpdateButton] = useState(false);

  return (
    <div className="user">
      <div className="user-top">
        <div className="user-top-text">
          <h6 className="user-top-heading ">My Post</h6>
          <p className="user-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
        <div className="user-top-button">
          <button className="user-top-btn">
            <img src={ic_plus} alt="" />
            Add Post
          </button>
        </div>
      </div>
      <div className="user-empty">
        <h2>List is empty</h2>
        <p>
          Go back to your feed and bookmark posts you’d like to keep or read
          later. Each post you bookmark will be stored here.
        </p>
        <a href="/">Back to feed</a>
      </div>
      {/* <div className="user-primary user-page"></div> */}
    </div>
  );
};

export default User;
