import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ProductData: {},
  isLoading: false,
  isError: false,
};

export const productsSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    requestData: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
  },
});

export const fetchProductData = createAsyncThunk(
  "product/getProducts",
  async () => {
    const res = await axios.get("/src/Data.json");
    return res.data;
  }
);

export const { requestData } = productsSlice.actions;

export default productsSlice.reducer;
