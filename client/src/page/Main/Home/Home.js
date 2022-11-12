import React from "react";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import PostComponent from "../../../components/PostComponent/PostComponent";
import test from "../../../assets/images/test.png";
import "./home.scss";
const Home = () => {
  // const settings = {
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 4000,
  // };

  return (
    <div className="container">
      <div className="home-container">
        <h3 className="home-title">Developer</h3>
        <div className="home-dev">
          <img src={test} alt="" />
        </div>
        <h3 className="home-title">Posts</h3>
        <div className="home-post">
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
          <PostComponent
            image={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            }
            title={
              "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            }
            desc={
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto sunt aut facere repellat provident occaecati excepturi optio reprehenderit quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
            status="True"
            amount={1}
            price={1200}
            category="Dogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
