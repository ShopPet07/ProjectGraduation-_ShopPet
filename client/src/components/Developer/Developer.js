import React from "react";
import "./developer.scss";

const Developer = ({ image, name, desc, skill = [] }) => {
  return (
    <div className="developer">
      <div className="developer-image">
        <img src={image} alt="" />
      </div>
      <div className="developer-content">
        <div className="developer-text">
          <h3 className="developer-name">{name}</h3>
          <p className="developer-desc">{desc}</p>
        </div>
        <div className="developer-skill">
          {skill.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <button className="developer-preview">View</button>
      </div>
    </div>
  );
};

export default Developer;
