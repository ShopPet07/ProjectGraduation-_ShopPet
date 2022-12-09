import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";

import InputComponents from "../../components/Input/InputComponents";
import { API } from "../../api";
import "./forgot.scss";
import ic_mail from "../../assets/icons/icon-mail.svg";

const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };

  function handleForgot() {
    if (email !== "" && firstName !== "" && lastName !== "") {
      setError(false);
      axios
        .post(`${API}/api/auth/forgot`, {
          email: email.toString(),
          firstName: firstName.toString(),
          lastName: lastName.toString(),
          newPassword: newPassword.toString(),
        })
        .then(async (response) => {
          await toast.success("Change password successfully <3", {
            position: toast.POSITION.TOP_RIGHT,
          });
          await setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch(() => {
          toast.error(`Error ! `, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
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
      <div className="forgot-container">
        <div className="forgot-primary">
          <h1 className="login-heading forgot-heading">Forgot</h1>
          <p className="forgot-desc">
            Please enter your information to recover your password !!!
          </p>
          <div className="row">
            <InputComponents
              value={firstName}
              onChange={getFirstName}
              placeholder={"First Name"}
              label={"First Name"}
            />
            <span></span>
            <InputComponents
              value={lastName}
              onChange={getLastName}
              placeholder={"Last Name"}
              label={"Last Name"}
            />
          </div>
          <InputComponents
            icon={ic_mail}
            value={email}
            onChange={getEmail}
            placeholder={"abc@gmail.com"}
            label={"Email"}
          />
          <InputComponents
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleForgot();
              }
            }}
            password
            value={newPassword}
            onChange={getNewPassword}
            placeholder={"**********"}
            label={"New Password"}
          />
          <button
            onClick={handleForgot}
            className={
              checkEmail
                ? error
                  ? "login-submit check-email"
                  : "login-submit"
                : "login-submit check-email"
            }
          >
            {checkEmail
              ? error
                ? "Please, Check again!!!"
                : "Submit"
              : "Wrong email format!!!"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
