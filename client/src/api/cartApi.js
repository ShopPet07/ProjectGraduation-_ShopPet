import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const res = await axios.get(`${API}/api/cart/`);
    return res.then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
});

// export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
//   const res = await fetch(`${API}/api/cart`);
//   const data = await res.json();
//   return data;
// });
