import React, { useState } from "react";
import { postCartThunk } from "../../store/slice/cart.slice.js";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAdd = () => {
    setQuantity((state) => state + 1);
  };

  const handleMinus = () => {
    setQuantity((state) => {
      if (state > 1) return state - 1;
      return state;
    });
  };

  const handleAddToCart = () => {
    dispatch(postCartThunk(product, quantity));
  };

  return (
    <article>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <ul>
          <li>
            <span>Price</span>
            <span>{product?.price}</span>
          </li>
          <li>
            <span>Quantity</span>
            <div>
              <button onClick={handleMinus}>-</button>
              <div>{quantity}</div>
              <button onClick={handleAdd}>+</button>
            </div>
          </li>
        </ul>
        <button onClick={handleAddToCart}>
          Add to Cart <i className="bx bx-cart"></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
