import React from "react";
import { useState } from "react";

import google from "../../assets/icons/Google.svg";
import InputComponents from "../../components/Input/InputComponents";
import "./register.scss";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cofirmPassword, setCofirmPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkCofirm, setCheckCofirm] = useState(true);
  const [checkName, setCheckName] = useState(true);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const getFirstName = (e) => {
    setFirstName(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckCofirm(true);
    setCheckName(true);
  };
  const getLastName = (e) => {
    setLastName(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckCofirm(true);
    setCheckName(true);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
    if (validateEmail(email)) {
      setCheckEmail(true);
      setError(false);
      setCheckCofirm(true);
      setCheckName(true);
    } else {
      setCheckEmail(false);
    }
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckCofirm(true);
    setCheckName(true);
  };
  const getCofirmPassword = (e) => {
    setCofirmPassword(e.target.value);
    if (password === e.target.value) {
      setCheckCofirm(true);
      setError(false);
    } else {
      setCheckCofirm(false);
      setError(true);
    }
  };
  const getValueCheckBox = (e) => {
    setCheckBox(!checkBox);
    setError(false);
    setCheckCofirm(true);
    setCheckName(true);
  };

  function handleButonSubmit() {
    if (
      checkEmail &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      password === cofirmPassword &&
      checkBox
    ) {
      setError(false);
    } else if (firstName == "" || lastName == "") {
      setCheckName(false);
      setError(true);
    } else {
      setError(true);
    }
  }
  return (
    <div className="container">
      <div className="register-container">
        <div className="register-primary">
          <h1 className="register-heading">Register</h1>
          <p className="register-more">
            Already have an account? <a href="./Register">Sign in</a>
          </p>
          <button className="register-google">
            <img src={google} alt="" />
            Sign in with google
          </button>
          <span className="register-email">Or sign up with email</span>
          <div className="register-input-container">
            <InputComponents
              error={checkName ? false : true}
              value={firstName}
              placeholder={"Jva"}
              onChange={getFirstName}
              label={"First Name"}
            />
            <InputComponents
              error={checkName ? false : true}
              value={lastName}
              placeholder={"Script"}
              onChange={getLastName}
              label={"Last Name"}
            />
          </div>
          <InputComponents
            value={email}
            onChange={getEmail}
            placeholder={"abc@gmail.com"}
            label={"Email"}
            error={checkEmail ? false : true}
          />
          <InputComponents
            value={password}
            onChange={getPassword}
            placeholder={"********"}
            label={"Password"}
            password
          />
          <InputComponents
            error={checkCofirm ? false : true}
            value={cofirmPassword}
            onChange={getCofirmPassword}
            placeholder={"********"}
            label={"Cofirm Password"}
            password
          />
          <div className="register-agree">
            <input
              onChange={getValueCheckBox}
              value={checkBox}
              type="checkbox"
            />
            <p>
              I agree to the <a href="/">Tearms of Use</a> and have read and
              understand the <a href="/">Privacy policy.</a>
            </p>
          </div>
          <button
            onClick={handleButonSubmit}
            className={
              checkEmail
                ? error
                  ? "register-submit check-email"
                  : "register-submit"
                : "register-submit check-email"
            }
          >
            {checkEmail
              ? error
                ? "Please, Check again!!!"
                : "Create my account"
              : "Wrong email format!!!"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
