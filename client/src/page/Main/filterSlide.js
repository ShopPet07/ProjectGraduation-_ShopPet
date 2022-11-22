import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "All",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeTextSearch: (state, action) => {
      state.search = action.payload;
    },
    changeCategorySearch: (state, action) => {
      state.category = action.payload;
    },
  },
});
