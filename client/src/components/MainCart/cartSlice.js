import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api";
const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const res = await fetch(`${API}/api/cart`);
  const data = await res.json();
  return data;
});
