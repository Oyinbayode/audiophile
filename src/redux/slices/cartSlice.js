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

    // setCart: {
    //   reducer(state) {
    //     const Cart = state.Cart;
    //   },
    // },
  },
});

export const { addProduct, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
