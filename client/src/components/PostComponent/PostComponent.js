import React, { useState } from "react";

import "./postcomponents.scss";
import ic_category from "../../assets/icons/icon-category.svg";
import ic_dog from "../../assets/icons/icon-dog.svg";
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

  console.log(image);
  return (
    <div className="post-container">
      <div
        onClick={() => {
          setOnClick(!onClick);
        }}
        className="post-hidden"
      >
        <div className="post-image">
          <img
            src={
              image
                ? image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
            }
            alt=""
          />
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
      </div>
      <div className={onClick ? "post-show active" : "post-show"}>
        <div className="post-show-container">
          <span
            onClick={() => {
              setOnClick(!onClick);
            }}
            className="post-show-close"
          >
            X
          </span>
          <div className="post-show-top">
            <span className="post-show-species">SPECIES</span>
            <img src={ic_dog} alt="" />
          </div>
          <div className="post-show-image">
            <img
              src={
                image
                  ? image
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
              }
              alt=""
            />
          </div>
          <div className="post-show-content">
            <div className="post-show-more">
              <div className="post-show-more-items">
                <h6>User.04</h6>
                <span>manhhuy</span>
              </div>
              <div className="post-show-more-items">
                <h6>Number</h6>
                <span>+84786989685</span>
              </div>
              <div className="post-show-more-items">
                <h6>STATUS</h6>
                <span>True</span>
              </div>
            </div>
            <h4 className="post-show-title">Abigail</h4>
            <p className="post-show-desc">
              A pet, or companion animal, is an animal kept primarily for a
              person's company or entertainment rather than as a working animal,
              livestock, or a laboratory animal.
            </p>
            <span className="post-show-price">${price}</span>
          </div>
          <button className="post-add post-show-add">Add cart</button>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
