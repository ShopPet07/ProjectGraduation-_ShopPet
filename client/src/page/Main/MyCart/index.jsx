import React from "react";
// import { useSelector } from "react-redux";

import CartItem from "../../../components/CartItem";
import "./mycart.scss";
// import { getMyCart } from "../../../redux/selectors";

const MyCart = () => {
  // const myCarts = useSelector(getMyCart);
  const [cart, setCartItem] = React.useState({
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
      });
      setCartItem((prev) => {
        return {
          ...prev,
          cartId: addCartitem,
        };
      });
      return addCartitem;
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
    <div className="mycart">
      <div className="mycart-top">
        <div className="mycart-top-text">
          <h6 className="mycart-top-heading ">My Cart</h6>
          <p className="mycart-top-desc">
            Acount users can assess and review risks, questionnaries, data leaks
            and identify breaches
          </p>
        </div>
      </div>
      <span className="mycart-selectAll">Select All</span>
      <div className="mycart-list">
        <span
          onClick={() => {
            addCart(1);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(2);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(3);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(4);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(5);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(6);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(7);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(8);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(9);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(10);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(11);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(12);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(13);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(14);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(15);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
        <span
          onClick={() => {
            addCart(16);
          }}
        >
          <CartItem
            image={
              "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
            }
            price={200}
            title={"My Name is Dogs"}
            user={"TrongPhucs"}
            status={true}
          />
        </span>
      </div>
      <div className="mycart-action">
        <button className="mycart-btn mycart-btn-delete">Delete</button>
        <button className="mycart-btn mycart-btn-buy">Buy Now</button>
      </div>
    </div>
  );
};

export default MyCart;
