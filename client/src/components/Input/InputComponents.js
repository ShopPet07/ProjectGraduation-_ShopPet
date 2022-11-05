import React from "react";
import { useState } from "react";

import "./input.scss";
import eyeHidden from "../../assets/icons/eye-hidden.svg";
import eyeShow from "../../assets/icons/eye-show.svg";
const InputComponents = ({ label, password, placeholder, onChange }) => {
  const [eye, setEye] = useState(false);
  const handleShowPassword = () => {
    setEye(!eye);
  };
  return (
    <div>
      <label className="input-label">{label}</label>
      <div className="input-component">
        <input
          onChange={onChange}
          placeholder={placeholder}
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

export default InputComponents;
