import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";
import { fetchPosts } from "../../../api/postsApi";

const initialState = {
  status: "idle",
  postList: [
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
    {
      productId: 4,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 5,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 6,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
    {
      productId: 7,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 8,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 9,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
    {
      productId: 10,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 11,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 12,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
    {
      productId: 13,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 14,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 15,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
    {
      productId: 16,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      price: 200,
      description: "Cat short hart Us",
    },
    {
      productId: 17,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      price: 200,
      description: "dog husky",
    },
    {
      productId: 18,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      price: 200,
      description: "dog corgi",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.postList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        // state.postList = action.payload[0];
        // state.postList = action.payload;
      });
  },
});
