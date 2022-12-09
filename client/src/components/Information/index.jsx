import React, { useState } from "react";

import "./information.scss";
import eyeHidden from "../../assets/icons/eye-hidden.svg";
import eyeShow from "../../assets/icons/eye-show.svg";
const Information = ({
  date,
  label,
  dsb,
  password,
  showInfo,
  onChange,
  value,
}) => {
  const [eye, setEye] = useState(false);
  const handleShowPassword = () => {
    setEye(!eye);
  };
  return (
    <div>
      <label className="information-label">{label}</label>
      <div
        className={
          dsb ? "information-component" : "information-component disable"
        }
      >
        <input
          disabled={dsb ? true : false}
          value={value}
          onChange={onChange}
          placeholder={showInfo}
          type={date ? "date" : password ? (eye ? "text" : "password") : "text"}
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

export default Information;
