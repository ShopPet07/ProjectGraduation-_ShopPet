import React, { useState } from "react";

import "./cartitem.scss";
import icon_user from "../../assets/icons/icon-user.svg";

const CartItem = ({ image, name, user, status, price }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "cart active" : "cart"}
    >
      <div className="cart-image">
        <img src={image} alt="" />
      </div>
      <div className="cart-content">
        <h5 className="cart-name">{name}</h5>
        <div className="cart-user">
          <img src={icon_user} alt="" />
          <span>{user}</span>
        </div>
        <span className="cart-status">Status: {status}</span>
        <span className="cart-price">${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
