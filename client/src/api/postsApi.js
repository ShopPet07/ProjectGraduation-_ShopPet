import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = API.get(`/api/pets/fetchAll`);
    return res.then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
});
