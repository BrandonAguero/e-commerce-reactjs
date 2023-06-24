import { configureStore } from "@reduxjs/toolkit";
import products from "./slice/products.slice.js";
import cart from "./slice/cart.slice.js";

export default configureStore({
  reducer: {
    products,
    cart,
  },
});
