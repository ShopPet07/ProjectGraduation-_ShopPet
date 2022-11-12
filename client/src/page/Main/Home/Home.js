import React from "react";
import { useSelector } from "react-redux";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import PostComponent from "../../../components/PostComponent/PostComponent";
import "./home.scss";
import { todosRemaining } from "../../../redux/selectors";
const Home = () => {
  const posts = useSelector(todosRemaining);
  return (
    <div className="container">
      <div className="home-container">
        <h3 className="home-title">Developer</h3>
        <div className="home-dev">
          <img
            src="https://i.pinimg.com/originals/4c/b6/bd/4cb6bda5921d9ebc5a275dd22214ea0f.gif"
            alt=""
          />
        </div>
        <h3 className="home-title">Posts</h3>
        <div className="home-post">
          {posts.map((post) => {
            return (
              <PostComponent
                key={post.id}
                image={post.image !== "" ? post.image : false}
                title={post.title}
                desc={post.desc}
                status={post.status}
                amount={post.amount}
                price={post.price}
                category={post.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
