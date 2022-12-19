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
  const [imageAsFile, setImageAsFile] = useState("");
  const handleGetImage = async (e) => {
    const image = await e.target.files[0];
    console.log(image.size);
    if (image.size > 282830) {
      toast.error("File too large");
      setImageAsFile("");
    } else {
    setImageAsFile(URL.createObjectURL(image));
    const base64 = await convertBase64(image);
    await setBaseImage(base64);
    }
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleUploadPost = () => {
    console.log(baseImage);
    API.post("api/pets", {
      image: baseImage,
      title: "Test upload",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis corporis est officia, repellendus suscipit quaerat itaque nisi tempore voluptas sint perferendis neque ut molestias. Laborum, suscipit repellat. Id, aperiam ducimus!",
      categoryId: 0,
      price: 1410,
    })
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
        <div className="user-form">
          <span onClick={() => setShowForm(false)} className="user-form-close">
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
          <button onClick={handleUploadPost}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default User;
