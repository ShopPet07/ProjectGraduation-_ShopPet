import React, { useState } from "react";

import "./infomation.scss";
import eyeHidden from "../../assets/icons/eye-hidden.svg";
import eyeShow from "../../assets/icons/eye-show.svg";
const Infomation = ({ label, password, showInfo, onChange, value }) => {
  const [eye, setEye] = useState(false);
  const handleShowPassword = () => {
    setEye(!eye);
  };
  return (
    <div>
      <label className="infomation-label">{label}</label>
      <div className="infomation-component">
        <input
          value={value}
          onChange={onChange}
          placeholder={showInfo}
          type={password ? (eye ? "text" : "password") : "text"}
        />
        <span onClick={handleShowPassword}>
          {password ? (
            eye ? (
              <img src={eyeShow} alt="" />
            ) : (
              <img src={eyeHidden} alt="" />
            )
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
};

export default Infomation;
