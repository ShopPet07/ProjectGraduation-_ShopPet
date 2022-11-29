import React, { useState } from "react";

import "./postcomponents.scss";
const PostComponent = ({
  image,
  category,
  title,
  desc,
  status,
  amount,
  price,
  age,
  kg,
  species,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="post">
      <div className="post-container">
        <span className="post-container-image">
          <img
            src={
              image ??
              "https://media.istockphoto.com/id/1210341751/photo/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head.jpg?s=612x612&w=0&k=20&c=W-XLvsyFNgl5tjAJ75a8vWdFLSeMOzHrr4j9GEjw3Zo="
            }
            alt=""
          />
        </span>
        <div onClick={() => setShow(true)} className="post-show-info">
          <h3 className="post-container-title">
            {title ?? "Noodle eat eat soup"}
          </h3>
          <span className="post-container-category">{category ?? "Non"}</span>
          <div className="post-container-info">
            <div className="post-container-info-item">
              <span>{age ?? "00"}</span>
              <h6>Age/Month</h6>
            </div>
            <div className="post-container-info-item">
              <span>{kg ?? "00"}</span>
              <h6>Kg</h6>
            </div>
            <div className="post-container-info-item">
              <span>{species ?? "Other"}</span>
              <h6>Species</h6>
            </div>
          </div>
          <button className="post-container-button">Add to cart</button>
        </div>
      </div>
      {show && <div className="post-opacity"></div>}
      <div className={show ? "post-show active" : "post-show"}>
        <span onClick={() => setShow(false)} className="post-show-close">
          x
        </span>
      </div>
    </div>
  );
};

export default PostComponent;
