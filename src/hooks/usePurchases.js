import { useState } from "react";
import getConfigAuth from "../utils/getConfigAuth.js";
import axios from "axios";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";

  const getAllPurchases = () => {
    axios
      .get(url, getConfigAuth())
      .then((res) => {
        setPurchases(res.data);
      })
      .catch((err) => console.error(err));
  };

  const makePurchase = () => {
    axios
      .post(url, null, getConfigAuth())
      .then((res) => {
        console.log(res.data);
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
