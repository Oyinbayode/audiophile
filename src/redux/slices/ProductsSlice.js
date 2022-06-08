import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ProductData: [],
  status: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdded: {
      reducer(state, action) {
        state.ProductData.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Add Fetched Product Data to Array
        state.ProductData = state.ProductData.concat(action.payload);

        localStorage.setItem("Data", JSON.stringify(state.ProductData));
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message;
      });
  },
});

export const fetchProductData = createAsyncThunk(
  "product/getProducts",
  async () => {
    try {
      const res = await axios.get("Data.json");
      console.log(res.data);
      return [...res.data.ProductData];
    } catch (err) {
      return err.message;
    }
  }
);

export const { productAdded } = productsSlice.actions;

export default productsSlice.reducer;
