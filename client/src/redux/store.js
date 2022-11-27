// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../components/MainCart/cartSlice";
import { filtersSlice } from "../page/Main/filterSlide";
import { postsSlice } from "../page/Main/Home/postsSlide";
import { postUserSlice } from "../page/Main/MyCart/postUserSlide";
import { userSlice } from "../page/Main/User/userSlice";
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    posts: postsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    postsUser: postUserSlice.reducer,
  },
});
export default store;
