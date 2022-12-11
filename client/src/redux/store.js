import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../page/Main/MyCart/cartSlice";
import { filtersSlice } from "../page/Main/filterSlide";
import { postsSlice } from "../page/Main/Home/postsSlide";
// import { postUserSlice } from "../page/Main/MyCart/postUserSlide";
import { userSlice } from "../page/Main/User/userSlice";
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    posts: postsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    // postsUser: postUserSlice.reducer,
  },
});
export default store;
