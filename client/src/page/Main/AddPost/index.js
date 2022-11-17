import React, { useState, useId } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

// import ic_dog from "../../assets/icons/icon-dog.svg";
// import ic_sad from "../../assets/icons/icon-sad.svg";
import "./addpost.scss";
import { addPost } from "../../../redux/actions";
const AddPost = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setimagePreview] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [assess, setAssess] = useState("");
  const [species, setSpecies] = useState("");
  const [price, setPrice] = useState("");

  const id = useId();
  const dispatch = useDispatch();
  const handleAddPostImage = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setimagePreview(file);
    setImage(e.target.value);
  };
  const handleAddPost = () => {
    dispatch(
      addPost({
        id: id,
        title: title,
        image: image,
        desc: desc,
        user: "trongphuc",
        number: "+84849334",
        status: true,
        price: price,
        amount: 1,
        species: species,
      })
    );
    toast("Successfully");
    setImage("");
    setTitle("");
    setDesc("");
    setAssess("");
    setSpecies("");
    setPrice("");
  };
  return (
    <div className="postadd">
      <ToastContainer></ToastContainer>
      <div className="postadd-container">
        <div className="postadd-left">
          <label className="postadd-lable">URL Image</label>
          <div className="mypost-item-show-image postadd-image">
            <input
              value={image}
              onChange={(e) => handleAddPostImage(e)}
              type="file"
            />
            {imagePreview && <img src={imagePreview.preview} alt="" />}
          </div>
          <label className="postadd-lable">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="postadd-input postadd-desc"
            type="text"
          />
        </div>
        <div className="postadd-right">
          <label className="postadd-lable">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="postadd-input postadd-title"
            type="text"
          />

          <label className="postadd-lable">Assess</label>
          <input
            value={assess}
            onChange={(e) => setAssess(e.target.value)}
            className="postadd-input postadd-assess"
            type="text"
          />
          <label className="postadd-lable">Species</label>
          <input
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="postadd-input postadd-species"
            type="text"
          />
          <label className="postadd-lable">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="postadd-input postadd-price"
            type="text"
          />
        </div>
      </div>
      <button onClick={handleAddPost} className="postadd-submit">
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
