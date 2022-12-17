import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import "./mycart.scss";
import { API } from "../../../api";
import { cartSlice } from "../MyCart/cartSlice";
import CartItem from "../../../components/CartItem";
import { getCarts } from "../../../redux/selectors";
const MyCart = () => {
  const dispatch = useDispatch();
  const myCarts = useSelector(getCarts);
  const [cart, setCart] = React.useState({
    userId: localStorage.getItem("userLogin"),
    cartId: [],
  });

  function selectCart(id) {
    let addCartItem = [...cart.cartId];
    let checkCart = addCartItem.find((c) => c === id);
    if (checkCart) {
      addCartItem.find((item, index) => {
        if (item === id) {
          addCartItem.splice(index, 1);
        }
      });
      setCart((prev) => {
        return {
          ...prev,
          cartId: addCartItem,
        };
      });
      return addCartItem;
    } else {
      addCartItem.push(id);
      setCart((prev) => {
        return {
          ...prev,
          cartId: addCartItem,
        };
      });
    }
  }
  const handleDelete = () => {
    console.log(cart);
    const id = localStorage.getItem("userLogin");
    if (cart.cartId) {
      API.delete(`api/cart/delete`, {
        data: cart,
      })
        .then(() => {
          toast.success("Successfully");
          dispatch(cartSlice.actions.deleteItems(cart.cartId));
          setCart({
            userId: localStorage.getItem("userLogin"),
            cartId: [],
          });
        })
        .catch((error) => {
          toast.error("Error!!!");
          console.log(error);
        });
    } else {
      toast.error("Please select!!!");
    }
  };
  return (
    <div className="mycart">
      <ToastContainer></ToastContainer>
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
        {myCarts.map((item) => {
          return (
            <span
              key={item.id}
              onClick={() => {
                selectCart(item.id);
              }}
            >
              <CartItem
                image={
                  "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
                }
                price={item.price || "00.0"}
                title={item.title || "My Name is Dogs"}
                user={"TrongPhucs"}
                status={true}
              />
            </span>
          );
        })}
      </div>
      <div className="mycart-action">
        <button onClick={handleDelete} className="mycart-btn mycart-btn-delete">
          Delete
        </button>
        <button className="mycart-btn mycart-btn-buy">Buy Now</button>
      </div>
    </div>
  );
};

export default MyCart;

// <span
//           onClick={() => {
//             addCart(1);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(2);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(3);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(4);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(5);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(6);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(7);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(8);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(9);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(10);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(11);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(12);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(13);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(14);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(15);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
//         </span>
//         <span
//           onClick={() => {
//             addCart(16);
//           }}
//         >
//           <CartItem
//             image={
//               "https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o="
//             }
//             price={200}
//             title={"My Name is Dogs"}
//             user={"TrongPhucs"}
//             status={true}
//           />
// </span>
