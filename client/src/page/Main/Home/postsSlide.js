import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";

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
        state.status = "loadding";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.postList = action.payload;
      });
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch(`${API}/api/pets/fetchAll`);
  const data = await res.json();
  return data;
});
