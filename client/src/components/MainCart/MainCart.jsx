import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";
import { getCarts } from "../../redux/selectors";
import { fetchCart } from "./cartSlice";
const MainCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getCarts);
  // useEffect(() => {
  //   if (localStorage.getItem("userLogin")) {
  //     dispatch(fetchCart());
  //   }
  // }, []);

  const [cart, setCartItem] = useState({
    userId: 1,
    cartId: [],
  });

  function addCart(id) {
    let addCartitem = [...cart.cartId];

    let checkCart = addCartitem.find((c) => c === id);
    if (checkCart) {
      addCartitem.find((item, index) => {
        if (item === id) {
          addCartitem.splice(index, 1);
        }
        return addCartitem;
      });
      setCartItem((prev) => {
        return {
          ...prev,
          cartId: addCartitem,
        };
      });
    } else {
      addCartitem.push(id);
      setCartItem((prev) => {
        return {
          ...prev,
          cartId: addCartitem,
        };
      });
    }
  }
  return (
    <div className="main-cart">
      <div className="main-cart-caption">
        <h5>My Cart</h5>
      </div>
      <div className="main-cart-container">
        <div className="main-cart-list">
          {carts.length !== 0 ? (
            carts.map((itemCart) => {
              return (
                <span onClick={() => addCart(itemCart.id)} key={itemCart.id}>
                  <CartItem
                    image={itemCart.image}
                    name={itemCart.name}
                    user={itemCart.user}
                    status={itemCart.status}
                    price={itemCart.price}
                  />
                </span>
              );
            })
          ) : (
            <p style={{ textAlign: "center", fontSize: "14px" }}>No product</p>
          )}
        </div>
        <div className="main-cart-btn">
          <button className="main-cart-pay">Order</button>
          <button className="main-cart-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MainCart;