import { useState } from "react";
import getConfigAuth from "../utils/getConfigAuth.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCartG } from "../store/slice/cart.slice.js";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();
  const dispatch = useDispatch();

  const mainUrl = import.meta.env.VITE_REACT_APP_URL;
  const url = `${mainUrl}/purchase`;

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
