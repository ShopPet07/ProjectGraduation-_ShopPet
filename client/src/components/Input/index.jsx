import React from "react";
import { useState } from "react";

import "./input.scss";
import eyeHidden from "../../assets/icons/eye-hidden.svg";
import eyeShow from "../../assets/icons/eye-show.svg";
const InputComponents = ({
  label,
  password,
  placeholder,
  onChange,
  onKeyPress,
  value,
  icon,
}) => {
  const [eye, setEye] = useState(false);
  const handleShowPassword = () => {
    setEye(!eye);
  };
  return (
    <div className="input-container">
      <div className="input-primary">
        <label className="input-label">{label}</label>
        <div className="input-component">
          <input
            onKeyPress={onKeyPress}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={password ? (eye ? "text" : "password") : "text"}
          />
        </div>
      </div>
      {password ? (
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
      ) : icon ? (
        <span>
          <img src={icon} alt="" />
        </span>
      ) : null}
    </div>
  );
};

export default InputComponents;
