import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { API } from "../../api";
import { ReactComponent as IconCategory } from "../../assets/icons/icon-categoryPost.svg";
import { ReactComponent as IconCart } from "../../assets/icons/icon-cart.svg";
import "./postcomponents.scss";
const PostComponent = ({
  id,
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
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [reviewImage, setReviewImage] = useState(false);

  const addCart = async () => {
    try {
      const res = await axios.post(`${API}/api/cart/addToCart/${id}`);
      res
        .then(({ data }) => {
          console.log(data);
        })
        .catch(function (error) {
          console.log({ error });
        });
    } catch (error) {
      console.log(error);
    }
  };

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
        <div onClick={() => setShow(true)} className="post-container-info">
          <span className="post-container-category">
            <IconCategory />
            {category ?? "Non"}
          </span>
          <h3 className="post-container-title">
            {title ?? "Noodle eat eat soup"}
          </h3>
          <p className="post-container-desc">
            Noodle eat eat soup Noodle eat eat soup
            {desc ?? "Noodle eat eat soup"}
          </p>
          {/* <div className="post-container-information">
            <div className="post-container-info-item">
              <h6>{age ?? "00"}</h6>
              <span>Age/Month</span>
            </div>
            <div className="post-container-info-item">
              <h6>{kg ?? "00"}</h6>
              <span>Kg</span>
            </div>
            <div className="post-container-info-item">
              <h6>{species ?? "Other"}</h6>
              <span>Species</span>
            </div>
          </div> */}
        </div>
        <div className="post-container-more">
          <span className="post-container-price">${price || "0.00"}</span>
          <button onClick={addCart} className="post-container-button">
            <IconCart />
          </button>
        </div>
        <div className="post-container-buy">
          <button className="post-container-button">Buy now</button>
        </div>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(false);
          }}
          className="post-opacity"
        ></div>
      )}
      <div className={show ? "post-show active" : "post-show"}>
        <span
          onClick={() => {
            setShow(false);
          }}
          className="post-show-close"
        ></span>
        <span
          onClick={() => {
            setReviewImage(!reviewImage);
          }}
          className={reviewImage ? "post-show-image active" : "post-show-image"}
        >
          <img
            src={
              image ??
              "https://media.istockphoto.com/id/1210341751/photo/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head.jpg?s=612x612&w=0&k=20&c=W-XLvsyFNgl5tjAJ75a8vWdFLSeMOzHrr4j9GEjw3Zo="
            }
            alt=""
          />
        </span>
        <div
          style={reviewImage ? { zIndex: "-1" } : {}}
          className="post-show-content"
        >
          <h3 className="post-show-title">{title ?? "Noodle eat eat soup"}</h3>
          <p className="post-show-desc">{desc ?? "Noodle eat eat soup"}</p>
        </div>
        <div
          style={reviewImage ? { zIndex: "-1" } : {}}
          className="post-show-more"
        >
          <span className="post-show-price">Price: ${price || "0.00"}</span>
          <button className="post-show-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
