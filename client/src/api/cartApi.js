import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const fetchCart = createAsyncThunk("posts/fetchCart", async () => {
  try {
    const res = axios.get(`${API}/api/cart/`);
    return res.then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
});
