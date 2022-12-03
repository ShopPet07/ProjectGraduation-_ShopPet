import React from "react";
import { useSelector } from "react-redux";
// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import PostComponent from "../../../components/PostComponent/";
import "./home.scss";
import {
  potsRemaining,
  postLoading,
  textChangeSelector,
  categoryChangeSelector,
} from "../../../redux/selectors";
const Home = () => {
  const posts = useSelector(potsRemaining);
  const status = useSelector(postLoading);
  const searchText = useSelector(textChangeSelector);
  const searchCategory = useSelector(categoryChangeSelector);
  console.log(searchCategory);
  return (
    <section className="home">
      <div className="home-content">
        {searchText === "" && searchCategory === "All" && (
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
        )}
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
      </div>
      <div className="home-more">
        <div className="home-cart">
          <label className="home-cart-title home-more-label">Discover</label>
          <div className="home-cart-primary">Discover not found</div>
        </div>
        <div className="home-topics">
          <label className="home-cart-title home-more-label">Topics</label>
          <div className="home-topics-primary">
            <div className="home-topics-item"></div>
            <div className="home-topics-item"></div>
            <div className="home-topics-item"></div>
            <div className="home-topics-item"></div>
            <div className="home-topics-item"></div>
            <div className="home-topics-item"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
