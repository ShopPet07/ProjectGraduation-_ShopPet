import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMe } from "../../../api/userApi";
const initialState = {
  loading: "idle",
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
      });
  },
});
