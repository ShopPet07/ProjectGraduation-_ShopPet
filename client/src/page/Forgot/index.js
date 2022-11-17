import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import InputComponents from "../../components/Input/InputComponents";
import { API } from "../../api";

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
        .then(function (response) {
          toast.success("Change password successfully <3", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch(function (error) {
          toast.error("Error !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } else {
      setError(true);
    }
  }
  return (
    <div className="login-background">
      <ToastContainer></ToastContainer>
      <div className="login-container">
        <div className="login-primary">
          <h1 className="login-heading">Forgot Password</h1>
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
                : "Sign In"
              : "Wrong email format!!!"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
