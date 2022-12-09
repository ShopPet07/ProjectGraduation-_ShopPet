import React, { useState } from "react";

import "./cartitem.scss";
import icon_user from "../../assets/icons/icon-user.svg";

const CartItem = ({ image, title, user, status, price }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "cartItem active" : "cartItem"}
    >
      <div className="cartItem-image">
        <img src={image} alt="" />
      </div>
      <div className="cartItem-content">
        <div className="cartItem-user">
          <img src={icon_user} alt="" />
          <span>{user}</span>
        </div>
        <h5 className="cartItem-title">{title}</h5>
        <span className="cartItem-status">Status: {status.toString()}</span>
        <span className="cartItem-price">${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
