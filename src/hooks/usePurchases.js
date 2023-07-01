import { useState } from "react";
import getConfigAuth from "../utils/getConfigAuth.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCartG } from "../store/slice/cart.slice.js";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();
  const dispatch = useDispatch();

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";

  const getAllPurchases = () => {
    axios
      .get(url, getConfigAuth())
      .then((res) => {
        setPurchases(res.data.reverse());
      })
      .catch((err) => console.error(err));
  };

  const makePurchase = () => {
    axios
      .post(url, null, getConfigAuth())
      .then((res) => {
        dispatch(setCartG([]));
      })
      .catch((err) => console.error(err));
  };

  return {
    purchases,
    getAllPurchases,
    makePurchase,
  };
};

export default usePurchases;
