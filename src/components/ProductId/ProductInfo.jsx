import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity((state) => state + 1);
  };

  const handleMinus = () => {
    setQuantity((state) => {
      if (state > 1) return state - 1;
      return state;
    });
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
              <div onClick={handleMinus}>-</div>
              <div>{quantity}</div>
              <div onClick={handleAdd}>+</div>
            </div>
          </li>
        </ul>
        <button>
          Add to Cart <i className="bx bx-cart"></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
