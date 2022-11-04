import React from "react";
import InputComponents from "../../components/Input/InputComponents";

import "./login.scss";
import google from "../../assets/icons/Google.svg";
const Login = () => {
  function request() {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "phucdeptrai@gmail.com",
        password: "123123",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-primary">
          <h1 className="login-heading">Welcome Back!</h1>
          <p className="login-more">
            Dont have an account? <a href="#">Sign up</a>
          </p>
          <button className="login-google">
            <img src={google} alt="" />
            Sign in with google
          </button>
          <InputComponents
            placeholder={"phammanhhuy@gmail.com"}
            label={"Email"}
          />
          <InputComponents
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
          <button onClick={request} className="login-submit">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
