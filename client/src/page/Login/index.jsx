import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";
import InputComponents from "../../components/Input";

import style from "../../global/style.module.scss";
import ic_mail from "../../assets/icons/icon-mail.svg";
import "./login.scss";
import { API } from "../../api";
import google from "../../assets/icons/Google.svg";
const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  // const axiosJWT = axios.create();

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
      API.post(`/api/auth/login`, {
        email: email.toString(),
        password: password.toString(),
      })
        .then((response) => {
          localStorage.setItem("token", response.data.AccessToken);
          localStorage.setItem("userLogin", response.data.id);
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
      <div className="login-container">
        <div className="login-primary">
          <h1 className="login-heading">
            {/* Welcome Backs <span>!</span> */}
            <div className={style.flipAnimation}>
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span> </span>
              <span>B</span>
              <span>a</span>
              <span>c</span>
              <span>k</span>
              <span>s</span>
              <span>!</span>
            </div>
          </h1>
          <p className="login-more">
            Dont have an account? <a href="./Register">Sign up</a>
          </p>
          <button className="login-google">
            <img src={google} alt="" />
            Sign in with google
          </button>
          <InputComponents
            icon={ic_mail}
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
        <div className="login-background"></div>
      </div>
    </div>
  );
};

export default Login;
