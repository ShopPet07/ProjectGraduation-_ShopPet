// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./index";

export const getMe = createAsyncThunk("user/getMe", async () => {
  try {
    const id = localStorage.getItem("userLogin");
    const res = API.get(`/api/users/getme/${id}`);
    return res.then(({ data }) => {
      //   return data;
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
});
