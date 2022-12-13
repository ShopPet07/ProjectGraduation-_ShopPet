import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    return await API.get(`/api/cart`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
});
