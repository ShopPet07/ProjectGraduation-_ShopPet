import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api";
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
      .addCase(fetchUser.pending, (state, action) => {})
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const idUser = await localStorage.getItem("userLogin");
  const res = await fetch(`${API}/api/users/getMe/${idUser}`);
  const data = res.json();
  return data;
});
