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
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      description: "dog corgi",
    },
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      description: "dog corgi",
    },
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      description: "dog corgi",
    },
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      description: "dog corgi",
    },
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
      description: "dog corgi",
    },
    {
      productId: 3,
      userId: 2,
      categoryId: 0,
      title: "Cat short hart Us",
      description: "Cat short hart Us",
    },
    {
      productId: 2,
      userId: 2,
      categoryId: 0,
      title: "dog husky",
      description: "dog husky",
    },
    {
      productId: 1,
      userId: 2,
      categoryId: 0,
      title: "dog corgi",
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
