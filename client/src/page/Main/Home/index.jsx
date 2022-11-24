import React from "react";
import { useSelector } from "react-redux";
// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import PostComponent from "../../../components/PostComponent/PostComponent";
import img_tomJerry from "../../../assets/images/tomandjerry.svg";
import "./home.scss";
// import { todosRemaining } from "../../../redux/selectors";
const Home = () => {
  // const posts = useSelector(todosRemaining);
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
        <PostComponent />
        <PostComponent
          image={"https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"}
        />
        <PostComponent
          image={
            "https://media.4-paws.org/5/4/4/c/544c2b2fd37541596134734c42bf77186f0df0ae/VIER%20PFOTEN_2017-10-20_164-3854x2667-1920x1329.jpg"
          }
        />
        <PostComponent />
        <PostComponent
          image={
            "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
          }
        />
        <PostComponent
          image={
            "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/10/50aa1cfd-chuot-hamster-3.jpg"
          }
        />
        <PostComponent />
        <PostComponent
          image={"https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"}
        />
        <PostComponent
          image={
            "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/10/898def1d-chuot-hamster-1.jpg"
          }
        />
        <PostComponent
          image={
            "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
          }
        />
        <PostComponent />
        <PostComponent
          image={
            "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/10/50aa1cfd-chuot-hamster-3.jpg"
          }
        />
      </div>
    </section>
  );
};

export default Home;
