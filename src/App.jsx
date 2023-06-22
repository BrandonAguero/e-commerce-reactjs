import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "./store/slice/products.slice.js";
import ProductIdPage from "./pages/ProductIdPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
      </Routes>
    </>
  );
}

export default App;
