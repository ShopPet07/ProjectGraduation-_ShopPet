import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AnimatedCursor from "react-animated-cursor";

import InputComponents from "../../components/Input/InputComponents";
import Example from "../../components/Loading";
import { API } from "../../api";
import "./forgot.scss";
import ic_mail from "../../assets/icons/icon-mail.svg";
const Forgot = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [loading, setLoading] = useState(false);

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
  function handleForgot() {
    setLoading(true);
    if (email !== "") {
      axios
        .post(`${API}/api/auth/forgot`, {
          email: email.toString(),
        })
        .then(async (response) => {
          await toast.success("Password sent to email successfully <3", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(false);
          await setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch(() => {
          setLoading(false);
          toast.error(`Error ! `, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } else {
    }
  }
  return (
    <div className="wrapper">
      <div className={loading ? "loading active" : "loading"}>
        <Example></Example>
      </div>
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
          <InputComponents
            icon={ic_mail}
            value={email}
            onChange={getEmail}
            placeholder={"abc@gmail.com"}
            label={"Email"}
          />
          <button
            style={{ marginTop: "50px" }}
            onClick={handleForgot}
            className={checkEmail ? "login-submit" : "login-submit check-email"}
          >
            {checkEmail ? "Send" : "Wrong email format!!!"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
