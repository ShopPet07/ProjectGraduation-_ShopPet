import React, { useState } from "react";

import "./mypostitem.scss";
import ic_dog from "../../assets/icons/icon-dog.svg";
import ic_sad from "../../assets/icons/icon-sad.svg";
const MyPostItem = ({
  image,
  title,
  desc,
  user,
  number,
  status,
  species,
  price,
}) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="mypost">
      <div
        className={showDelete === false ? "mypost-item active" : "mypost-item"}
      >
        <img className="mypost-item-image" src={image} alt="" />
        <div className="mypost-item-content">
          <h6>{title}</h6>
          <p className="mypost-item-desc">{desc}</p>
          <button
            onClick={() => setShowUpdate(!showUpdate)}
            className="mypost-item-update"
          >
            Update
          </button>
          <button
            onClick={() => setShowDelete(!showDelete)}
            className="mypost-item-delete"
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={showUpdate ? "mypost-item-show active" : "mypost-item-show"}
      >
        <div className="mypost-item-show-container">
          <span
            onClick={() => setShowUpdate(!showUpdate)}
            className="post-show-close"
          >
            X
          </span>
          <div className="mypost-item-show-top">
            <input
              type="text"
              placeholder={species}
              className="mypost-item-show-species"
            />
            <img src={ic_dog} alt="" />
          </div>
          <input className="mypost-item-show-image" type="file" />
          <div className="mypost-item-show-more">
            <div className="mypost-item-show-more-items">
              <h6>User</h6>
              <input type="text" placeholder={user} />
            </div>
            <div className="mypost-item-show-more-items">
              <h6>Number</h6>
              <input type="text" placeholder={number} />
            </div>
            <div className="mypost-item-show-more-items">
              <h6>STATUS</h6>
              <input type="number" placeholder={status} />
            </div>
          </div>
          <input
            type="text"
            placeholder={title}
            className="mypost-item-show-title"
          />
          <textarea
            type="text"
            className="mypost-item-show-desc"
            placeholder="Description"
          />
          <input
            type="number"
            placeholder={`$${[price]}`}
            className="mypost-item-show-price"
          />
          <button className="mypost-item-update mypost-item-save">Save</button>
        </div>
      </div>
      <div
        className={
          showDelete ? " mypost-item mypost-delete active" : "mypost-delete"
        }
      >
        <div className="mypost-item-content">
          <img className="mypost-item-sad" src={ic_sad} alt="" />
          <p className="mypost-item-warning">
            If you delete it, you won't be able to recover it
          </p>
          <button
            onClick={() => setShowDelete(!showDelete)}
            className="mypost-item-accept"
          >
            Delete
          </button>
          <button
            onClick={() => setShowDelete(!showDelete)}
            className="mypost-item-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPostItem;
