import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const res = await API.get(`/api/cart`);
    return res.then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
});
