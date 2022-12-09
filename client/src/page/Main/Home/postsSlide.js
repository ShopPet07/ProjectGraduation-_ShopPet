import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";
import { fetchPosts } from "../../../api/postsApi";

const initialState = {
  status: "idle",
  postList: [],
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
        state.postList = action.payload;
      });
  },
});
