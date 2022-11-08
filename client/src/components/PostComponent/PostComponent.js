import React, { useState } from "react";

import "./postcomponents.scss";
import ic_category from "../../assets/icons/icon-category.svg";
import ic_close from "../../assets/icons/close-outline.svg";
const PostComponent = ({
  image,
  category,
  title,
  desc,
  status,
  amount,
  price,
}) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <div
      onClick={() => {
        setOnClick(!onClick);
      }}
      className="post"
    >
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <div className="post-content">
        <div className="post-category">
          <img src={ic_category} alt="" />
          <span>{category}</span>
        </div>
        <h3 className="post-title">{title}</h3>
        <p className="post-desc">{desc}</p>
        <div className="post-more">
          <div className="post-more-left">
            <span className="post-status">Status: {status}</span>
            <span className="post-amount">Amount: {amount}</span>
          </div>
          <span className="post-price">${price}</span>
        </div>
        <button className="post-add">Add cart</button>
      </div>
      <div className={onClick ? "post-show active" : "post-show"}>
        <div
          onClick={() => {
            setOnClick(!onClick);
          }}
          className="post-show-image"
        >
          <img src={image} alt="" />
        </div>
        <div className="post-show-content">
          <span className="post-show-close">
            <img src={ic_close} alt="" />
          </span>
          <div className="post-show-category">
            <img src={ic_category} alt="" />
            <span>{category}</span>
          </div>
          <h3 className="post-show-title">{title}</h3>
          <p className="post-show-desc">{desc}</p>
          <div className="post-show-more">
            <div className="post-show-more-left">
              <span className="post-show-status">Status: {status}</span>
              <span className="post-show-amount">Amount: {amount}</span>
            </div>
            <span className="post-show-price">${price}</span>
          </div>
          <button className="post-show-add">Add cart</button>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
