import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmout: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, counter } = action.payload;
      const quantity = counter ? counter : 1;

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex >= 0) {
        if (state.cartItems[productIndex].quantity < product.data.stock) {
          state.cartItems[productIndex].quantity += quantity;
        }
      } else {
        const tmpProduct = { ...product, quantity };
        state.cartItems.push(tmpProduct);
      }

      // Update totalItems
      state.cartTotalQuantity = state.cartItems.reduce(
        (prev, next) => prev + next.quantity,
        0
      );

      // Update totalAmount
      state.cartTotalAmout = state.cartItems.reduce(
        (prev, next) => prev + next.quantity * next.data.price,
        0
      );
    },
    removeFromCart(state, action) {
      const { productKey } = action.payload;

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === productKey
      );

      if (productIndex >= 0) {
        const removedItem = state.cartItems.splice(productIndex, 1);

        // Update totalItems
        state.cartTotalQuantity -= removedItem[0].quantity;

        // Update totalAmount
        state.cartTotalAmout -=
          removedItem[0].quantity * removedItem[0].data.price;
      }
    },
    updateQuantity(state, action) {
      const { productKey, quantity } = action.payload;

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === productKey
      );

      if (productIndex >= 0) {
        const parsedQuantity = Number(quantity);
        if (parsedQuantity < state.cartItems[productIndex].data.stock) {
          state.cartItems[productIndex].quantity = parsedQuantity;
        }
      }

      // Update totalItems
      state.cartTotalQuantity = state.cartItems.reduce(
        (prev, next) => prev + next.quantity,
        0
      );

      // Update totalAmount
      state.cartTotalAmout = state.cartItems.reduce(
        (prev, next) => prev + next.quantity * next.data.price,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
