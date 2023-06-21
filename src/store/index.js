import { configureStore } from "@reduxjs/toolkit";
import products from "./slice/products.slice.js";

export default configureStore({
  reducer: {
    products,
  },
});
