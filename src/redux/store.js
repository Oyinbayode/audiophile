import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    productData: ProductsReducer,
  },
});
