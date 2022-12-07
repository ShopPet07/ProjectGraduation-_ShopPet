import React from "react";
// import { useSelector } from "react-redux";

import "./mycart.scss";
// import { getMyCart } from "../../../redux/selectors";

const MyCart = () => {
  // const myCarts = useSelector(getMyCart);

  return (
    <div className="Mycart">
      <div className="mycart-top">
        <div className="mycart-top-text">
          <h6 className="mycart-top-heading ">My Post</h6>
          <p className="mycart-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
      </div>
      <div className="mycart-primary"></div>
    </div>
  );
};

export default MyCart;
