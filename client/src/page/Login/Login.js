import React from "react";
import { useState } from "react";
import InputComponents from "../../components/Input/InputComponents";

import "./login.scss";
import google from "../../assets/icons/Google.svg";
const Login = () => {
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
    if (validateEmail(email)) {
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
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toString(),
          password: password.toString(),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      setError(true);
    }
  }
  return (
    <div className="container">
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
            placeholder={"phammanhhuy@gmail.com"}
            label={"Email"}
          />
          <InputComponents
            value={password}
            onChange={getPassword}
            placeholder={"********"}
            label={"Password"}
            password
          />
          <a
            href="https://www.youtube.com/watch?v=DXT9dF-WK-I"
            className="login-forgot"
          >
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
