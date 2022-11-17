import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import InputComponents from "../../components/Input/InputComponents";

import "./login.scss";
import { API } from "../../api";
import google from "../../assets/icons/Google.svg";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  const getEmail = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  function Login() {
    if (email !== "" && password !== "") {
      setError(false);
      axios
        .post(`${API}/api/auth/login`, {
          email: email.toString(),
          password: password.toString(),
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("userLogin", response.data);
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
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
          <h1 className="login-heading">Welcome Back!</h1>
          <p className="login-more">
            Dont have an account? <a href="./Register">Sign up</a>
          </p>
          <button className="login-google">
            <img src={google} alt="" />
            Sign in with google
          </button>
          <InputComponents
            value={email}
            onChange={getEmail}
            placeholder={"abc@gmail.com"}
            label={"Email"}
          />
          <InputComponents
            onKeyPress={(event) => {
              if (event.key === "Enter") Login();
            }}
            value={password}
            onChange={getPassword}
            placeholder={"********"}
            label={"Password"}
            password
          />
          <a href="/forgot" className="login-forgot">
            Forgot password
          </a>
          <button
            onClick={Login}
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

export default Login;