import React from "react";
import MyPostItem from "../../../components/MyPostItem/MyPostItem";
import { useSelector } from "react-redux";

import "./mypost.scss";
import { getMyPosts } from "../../../redux/selectors";

const MyPost = () => {
  const myPosts = useSelector(getMyPosts);

  return (
    <div className="MyPost">
      <div className="mypost-top">
        <div className="mypost-top-text">
          <h6 className="mypost-top-heading ">My Post</h6>
          <p className="mypost-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
      </div>
      <div className="mypost-primary">
        {myPosts &&
          myPosts.map((post) => {
            return (
              <MyPostItem
                key={post.id}
                image={post.image}
                title={post.title}
                desc={post.desc}
                user={post.user}
                number={post.number}
                status={post.status}
                species={post.species}
                price={post.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MyPost;
