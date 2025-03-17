import { createSlice } from "@reduxjs/toolkit";
/**
 * Redux slice for cart state management.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    /**
     * Adds an item to the cart or increments its quantity.
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing payload.
     */
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    /**
     * Increments the quantity of an item.
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing item ID.
     */
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    /**
     * Decrements the quantity of an item, removing it if it reaches zero.
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing item ID.
     */
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },
    /**
     * Removes an item from the cart.
     * @param {Object} state - Current state.
     * @param {Object} action - Action containing item ID.
     */
    removeFromCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
