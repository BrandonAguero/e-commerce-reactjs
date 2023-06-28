import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCartG: (state, action) => action.payload,
    addProductCartG: (state, action) => [...state, action.payload],
    deleteProductCartG: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

const { setCartG, addProductCartG, deleteProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

export const getCartThunk = () => (dispatch) => {
  axios
    .get(baseUrl, getConfigAuth())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => console.log(err));
};

export const postCartThunk = (product) => (dispatch) => {
  const data = {
    quantity: 1,
    productId: product.id,
  };

  axios
    .post(baseUrl, data, getConfigAuth())
    .then((res) => dispatch(addProductCartG(res.data)))
    .catch((err) => console.log(err));
};

export const deleteCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}/${id}`;
  axios
    .delete(url, getConfigAuth())
    .then((res) => {
      console.log(res.data);
      dispatch(deleteProductCartG(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
