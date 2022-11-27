import React from "react";
import MainCart from "../MainCart/MainCart";
import MainUser from "../MainUser/MainUser";

const MainMore = ({ active }) => {
  return (
    <div className={active ? "main-more active" : "main-more"}>
      <MainUser></MainUser>
      <MainCart></MainCart>
    </div>
  );
};

export default MainMore;
