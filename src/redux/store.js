import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import ProductsReducer from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    Data: ProductsReducer,
    CartState: cartReducer,
  },
});
