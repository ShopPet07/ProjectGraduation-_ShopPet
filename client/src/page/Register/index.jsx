import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";

import google from "../../assets/icons/Google.svg";
import ic_mail from "../../assets/icons/icon-mail.svg";
import InputComponents from "../../components/Input/InputComponents";
import "./register.scss";
import { API } from "../../api";
const Register = () => {
  const navigator = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkConfirm, setCheckConfirm] = useState(true);
  const [checkName, setCheckName] = useState(true);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const getFirstName = (e) => {
    setFirstName(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckConfirm(true);
    setCheckName(true);
  };
  const getLastName = (e) => {
    setLastName(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckConfirm(true);
    setCheckName(true);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setCheckEmail(true);
      setError(false);
      setCheckConfirm(true);
      setCheckName(true);
    } else {
      setCheckEmail(false);
    }
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
    setError(false);
    setCheckEmail(true);
    setCheckConfirm(true);
    setCheckName(true);
  };
  const getConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password === e.target.value) {
      setCheckConfirm(true);
      setError(false);
    } else {
      setCheckConfirm(false);
      setError(true);
    }
  };
  const getValueCheckBox = (e) => {
    setCheckBox(!checkBox);
    setError(false);
    setCheckConfirm(true);
    setCheckName(true);
  };

  function handleButtonSubmit() {
    if (
      checkEmail &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      password === confirmPassword &&
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
        .then(async (response) => {
          if (response.status === 200) {
            await toast.success("Successfully !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            await setTimeout(() => {
              navigator("/login");
            }, 2000);
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
    <div className="wrapper">
      <ToastContainer></ToastContainer>
      <AnimatedCursor
        innerSize={13}
        outerSize={30}
        color="220, 90, 90"
        outerAlpha={0.5}
        innerScale={1.2}
        outerScale={3}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="register-container">
        <div className="login-primary register-primary">
          <h1 className="register-heading">Register</h1>
          <p className="register-more">
            Already have an account? <a href="./login">Sign in</a>
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
            icon={ic_mail}
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
                handleButtonSubmit();
              }
            }}
            error={checkConfirm ? false : true}
            value={confirmPassword}
            onChange={getConfirmPassword}
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
            onClick={handleButtonSubmit}
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
        <div className="login-background"></div>
      </div>
    </div>
  );
};
export default Register;
