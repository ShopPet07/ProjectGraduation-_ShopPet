import React from "react";

import gmail from "../../../assets/images/gmail.png";
import phone from "../../../assets/images/phone.png";
import pencil from "../../../assets/images/pencil.png";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-heading">
        If you find an error or report it to us!!!
      </h2>
      <p className="contact-desc">To submit a report you have 3 options:</p>
      <div className="contact-select">
        <div className="contact-option">
          <img src={gmail} alt="" />
          <h5 className="contact-option-title">Send Email</h5>
          <p className="contact-option-desc">
            You can send information to email if you want to comment or find
            errors!!!
          </p>
          <a
            className="contact-option-button"
            href="mailto:phammanhhuy1107@gmail.com"
          >
            Email
          </a>
        </div>
        <div className="contact-option">
          <img src={phone} alt="" />
          <h5 className="contact-option-title">Number Phone</h5>
          <p className="contact-option-desc">
            You can send information to phone if you want to comment or find
            errors!!!
          </p>
          <a className="contact-option-button" href="tel:0786989685">
            Call
          </a>
        </div>
        <div className="contact-option">
          <img src={pencil} alt="" />
          <h5 className="contact-option-title">Information</h5>
          <p className="contact-option-desc">
            You can leave your information and we will actively contact
          </p>
          <a className="contact-option-button" href="">
            Write
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
