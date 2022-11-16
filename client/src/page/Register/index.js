import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import google from "../../assets/icons/Google.svg";
import InputComponents from "../../components/Input/InputComponents";
import "./register.scss";
import { API } from "../../api";
const Register = () => {
  const navigator = useNavigate();
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
    if (validateEmail(e.target.value)) {
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
      axios
        .post(`${API}/api/auth/register`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            setTimeout(() => {
              navigator("/login");
            }, 1000);
          }
        })
        .catch((error) => {
          if (error.status === 401) {
            toast.error("Email already exists  !", {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            toast.error("Check again !", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    } else if (firstName === "" || lastName === "") {
      setCheckName(false);
      setError(true);
    } else {
      setError(true);
    }
  }
  return (
    <div className="login-background">
      <ToastContainer></ToastContainer>
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
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleButonSubmit();
              }
            }}
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
  );
};
export default Register;
