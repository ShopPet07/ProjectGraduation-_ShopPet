import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCart } from "../../../api/cartApi";
const initialState = {
  status: "idle",
  listData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      state.listData.push(action.payload);
    },
    deleteItems: (state, action) => {
      state.listData.filter((item, index) => {
        return item.productId !== action.payload[index];
      });
    },
    buyNow: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.status = "idle";
      const dataFormat = [];
      action.payload.forEach((element) => {
        if (element) {
          dataFormat.push(element);
        }
      });
      state.listData = dataFormat;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.status = "idle";
      console.log("error");
    });
  },
});
