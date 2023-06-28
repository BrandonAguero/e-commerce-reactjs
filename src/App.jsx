import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "./store/slice/products.slice.js";
import ProductIdPage from "./pages/ProductIdPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Header from "./components/shared/Header.jsx";
import CartPage from "./pages/CartPage.jsx";
import { getCartThunk } from "./store/slice/cart.slice.js";
import PurchasesPage from "./pages/PurchasesPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCartThunk());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchases" element={<PurchasesPage />} />
      </Routes>
    </>
  );
}

export default App;
