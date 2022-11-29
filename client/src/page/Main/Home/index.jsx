import React from "react";
import { useSelector } from "react-redux";
// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import PostComponent from "../../../components/PostComponent/";
import img_tomJerry from "../../../assets/images/tomandjerry.svg";
import "./home.scss";
import { todosRemaining } from "../../../redux/selectors";
const Home = () => {
  const posts = useSelector(todosRemaining);
  return (
    <section className="home">
      <div className="home-image">
        <img src={img_tomJerry} alt="" />
      </div>
      <h1 className="home-title">
        Xop<span>Bet</span>
      </h1>
      <p className="home-text">Glad to be of service to you!!!</p>
      <div className="home-posts">
        {posts.map((post) => {
          return <PostComponent title={post.title} key={post.productId} />;
        })}
      </div>
    </section>
  );
};

export default Home;
