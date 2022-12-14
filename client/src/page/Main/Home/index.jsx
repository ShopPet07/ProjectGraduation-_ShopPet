import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import img from "../../../assets/images/tomandjerry.svg";
import PostComponent from "../../../components/PostComponent/";
import DiscoverItem from "../../../components/DiscoverItem";
import "./home.scss";
import {
  potsRemaining,
  postLoading,
  textChangeSelector,
  categoryChangeSelector,
} from "../../../redux/selectors";
import { fetchCart } from "../../../api/cartApi";
import { getMe } from "../../../api/userApi";
const Home = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(12);
  React.useEffect(() => {
    const login = localStorage.getItem("userLogin");
    if (login) {
      dispatch(fetchCart());
      dispatch(getMe());
    }
  }, []);

  const posts = useSelector(potsRemaining);
  const status = useSelector(postLoading);
  const searchText = useSelector(textChangeSelector);
  const searchCategory = useSelector(categoryChangeSelector);
  return (
    <section className="home">
      <div className="home-content">
        {searchText === "" && searchCategory === "All" && (
          <>
            <div className="home-container">
              <div className="home-image">
                <img src={img} alt="" />
                <p className="home-text">Glad to be of service to you!!!</p>
                <h1 className="home-title">
                  Xop<span>Bet</span>
                </h1>
              </div>
              <div className="home-more">
                <div className="home-discover">
                  <div className="home-discover-primary">
                    <DiscoverItem />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <h5 className="home-label">Product</h5>
        <div className="home-posts">
          {status === "loading" ? (
            <div style={{ transform: "translateY(1000%)" }} className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : posts.length === 0 || posts === null ? (
            <h6 className="home-null">Not found</h6>
          ) : (
            posts.slice(0, visible).map((post) => {
              return (
                <PostComponent
                  key={post.id}
                  image={post.image}
                  id={post.id}
                  category={post.categoryId === 0 ? "Cats" : "Dogs"}
                  title={post.title}
                  desc={post.description}
                  price={post.price}
                />
              );
            })
          )}
        </div>
        {posts.length >= visible ? (
          status !== "loading" ? (
            <button
              onClick={() => setVisible(visible + 12)}
              className="home-loadMore"
            >
              Load More
            </button>
          ) : (
            ""
          )
        ) : (
          <span></span>
        )}
      </div>
    </section>
  );
};
export default Home;
