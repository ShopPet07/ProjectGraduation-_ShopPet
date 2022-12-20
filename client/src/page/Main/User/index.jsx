import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import "./user.scss";
import { API } from "../../../api/index";
import { fetchPosts } from "../../../api/postsApi";
// import InputUpload from "../../../components/InputUpload";
import ic_plus from "../../../assets/icons/icon-plus.svg";
import ic_close from "../../../assets/icons/icon-close2.svg";
import ic_image from "../../../assets/icons/icon-image.svg";

const User = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const [imageAsFile, setImageAsFile] = useState(null);
  const handleGetImage = async (e) => {
    await setImageAsFile(URL.createObjectURL(e.target.files[0]));
    await setBaseImage(e.target.files[0]);
  };

  const handleUploadPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    await formData.append("image", baseImage);
    await formData.append("title", "Test upload");
    await formData.append(
      "description",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis corporis est officia, repellendus suscipit quaerat itaque nisi tempore voluptas sint perferendis neque ut molestias. Laborum, suscipit repellat. Id, aperiam ducimus!"
    );
    await formData.append("categoryId", 0);
    await formData.append("price", 1410);
    API.post("api/pets", formData)
      .then(() => {
        dispatch(fetchPosts());
        toast.success("Successfully");
      })
      .catch(() => {
        toast.error("Error");
      });
  };
  return (
    <div className="user">
      <ToastContainer></ToastContainer>
      <div className="user-top">
        <div className="user-top-text">
          <h6 className="user-top-heading ">My Post</h6>
          <p className="user-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
        <div className="user-top-button">
          <button onClick={() => setShowForm(true)} className="user-top-btn">
            <img src={ic_plus} alt="" />
            Add Post
          </button>
        </div>
      </div>
      <div className="user-empty">
        <h2>List is empty</h2>
        <p>
          Go back to your feed and bookmark posts you’d like to keep or read
          later. Each post you bookmark will be stored here.
        </p>
        <a href="/">Back to feed</a>
      </div>
      {showForm && (
        <form onSubmit={handleUploadPost}>
          <div className="user-form">
            <span
              onClick={() => setShowForm(false)}
              className="user-form-close"
            >
              <img src={ic_close} alt="" />
            </span>
            <h2>POST</h2>
            <input
              onChange={handleGetImage}
              accept=".jpg, .jpeg, .png"
              type="file"
              id="image"
            />
            <div className="user-form-image">
              <img
                id={imageAsFile ? "true" : "false"}
                src={imageAsFile || ic_image}
                alt=""
              />
            </div>
            <label htmlFor="image">Choose a photo</label>
            {/* <InputUpload label={"Title"} /> */}
            <button type="submit">Upload</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default User;
