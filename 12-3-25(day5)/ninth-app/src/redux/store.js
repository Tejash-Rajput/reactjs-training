import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/index";
/**
 * Redux store configuration.
 */
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
