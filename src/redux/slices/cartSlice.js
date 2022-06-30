import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [],
  TotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        const isInCart = state.Cart.find(
          (item) => item.id === action.payload.id
        );

        if (!isInCart) {
          state.Cart.push(action.payload);
          state.TotalPrice += action.payload.price * action.payload.quantity;
        } else {
          isInCart.quantity += action.payload.quantity;
          state.TotalPrice += action.payload.quantity * action.payload.price;
        }
      },
    },
    emptyCart: {
      reducer(state) {
        state.Cart = [];
        state.TotalPrice = 0;
      },
    },

    increaseQuantity: {
      reducer(state, action) {
        const item = state.Cart.find((item) => item.id === action.payload.id);
        item.quantity++;
        state.TotalPrice += item.price;
      },
    },
    decreaseQuantity: {
      reducer(state, action) {
        const item = state.Cart.find((item) => item.id === action.payload.id);
        if (item.quantity > 1) {
          item.quantity--;
          state.TotalPrice -= item.price;
        } else {
          item.quantity = 1;
        }
      },
    },
  },
});

export const { addProduct, emptyCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
