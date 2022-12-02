import React from "react";
import { useSelector } from "react-redux";
// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import PostComponent from "../../../components/PostComponent/";
import "./home.scss";
import { todosRemaining, postLoading } from "../../../redux/selectors";
const Home = () => {
  const posts = useSelector(todosRemaining);
  console.log(posts.length);
  const status = useSelector(postLoading);
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-image">
          <img
            src={
              "https://www.freewebheaders.com/wp-content/uploads/cute-sleepy-kitten.jpg"
            }
            alt=""
          />
          <h1 className="home-title">
            Xop<span>Bet</span>
          </h1>
          {/* <p className="home-text">Glad to be of service to you!!!</p> */}
        </div>
        {/* <div className="home-more">
          <h1 className="home-title">
            Xop<span>Bet</span>
          </h1>
          <p className="home-text">Glad to be of service to you!!!</p>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            expedita recusandae eos magnam odit! Ipsa facere maxime expedita
            mollitia quos ipsam aut tenetur! A laborum pariatur ullam? Tenetur,
            perspiciatis nobis?
          </p>
        </div> */}
      </div>
      <h5 className="home-label">Product</h5>
      <div className="home-posts">
        {status === "loading" ? (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : posts.length == 0 || posts === null ? (
          <h6 className="posts-null">Not found</h6>
        ) : (
          posts.map((post) => {
            return (
              <PostComponent
                key={post.productId}
                category={post.category === 0 ? "Dogs" : "Cats"}
                title={post.title}
                desc={post.description}
                price={post.price}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Home;
