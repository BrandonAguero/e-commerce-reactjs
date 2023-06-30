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
    <article className="flex flex-col gap-2">
      <h3 className="font-serif text-sm text-stone-600">{product?.brand}</h3>
      <h2 className="ml-4 font-semibold text-stone-700">{product?.title}</h2>
      <ul className="flex justify-between pr-12">
        <li className="flex flex-col gap-2">
          <span className="font-serif text-sm text-stone-600">Price</span>
          <span className="ml-4 text-base font-semibold">
            ${product?.price}
          </span>
        </li>
        <li className="flex flex-col gap-2">
          <span className="font-serif text-sm text-stone-600">Quantity</span>
          <div className="flex justify-between">
            <button className="border-y-2 border-l-2 p-2" onClick={handleMinus}>
              <i className="bx bx-minus"></i>
            </button>
            <div className="border-y-2 border-l-2 p-2">{quantity}</div>
            <button
              className="border-y-2 border-l-2 border-r-2 p-2"
              onClick={handleAdd}
            >
              <i class="bx bx-plus"></i>
            </button>
          </div>
        </li>
      </ul>
      <button
        className="m-auto w-60  bg-red-500 p-2 font-serif text-base text-white hover:brightness-105"
        onClick={handleAddToCart}
      >
        Add to Cart <i className="bx bx-cart"></i>
      </button>
      <p className="text-sm text-stone-700">{product?.description}</p>
    </article>
  );
};

export default ProductInfo;
