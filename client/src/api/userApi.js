// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const getMe = createAsyncThunk("user/getMe", async () => {
  try {
    const res = API.get(`/api/users/getMe`);
    return res.then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log({ error });
  }
});
