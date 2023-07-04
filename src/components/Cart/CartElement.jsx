import { useDispatch } from "react-redux";
import {
  deleteCartThunk,
  updateCartThunk,
} from "../../store/slice/cart.slice.js";
import { useState } from "react";

const CartElement = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(product.id));
  };
  const [quantity, setQuantity] = useState(1);

  console.log(product);

  const handleAdd = () => {
    setQuantity((state) => state + 1);
    const setQuantityProduct = product.quantity + 1;
    dispatch(updateCartThunk(product.id, { quantity: setQuantityProduct }));
  };

  const handleMinus = () => {
    setQuantity((state) => {
      if (state > 1) return state - 1;
      return state;
    });
    const setQuantityProduct = product.quantity - 1;

    dispatch(updateCartThunk(product.id, { quantity: setQuantityProduct }));
  };

  return (
    <article className="grid grid-cols-4 grid-rows-2 gap-x-2">
      <header className="col-start-1 col-end-2 row-start-1 row-end-2">
        <img
          className="h-20 w-20 object-contain"
          src={product.product.images[0].url}
        />
      </header>
      <section className="col-start-2 col-end-4 row-start-1 row-end-2">
        <h3 className="font-semibold text-stone-600 mm:text-lg">
          {product.product.title}
        </h3>
        <div className="flex mm:text-xl">
          <button className="border-y-2 border-l-2 p-2" onClick={handleMinus}>
            <i className="bx bx-minus"></i>
          </button>
          <div className="border-y-2 border-l-2 p-2">{quantity}</div>
          <button
            className="border-y-2 border-l-2 border-r-2 p-2"
            onClick={handleAdd}
          >
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </section>
      <section className="text-center">
        <button className="text-red-500 mm:text-lg" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </section>
      <footer className="col-start-3 col-end-5 row-start-2 row-end-2 flex gap-2 self-center justify-self-end text-xs mm:text-sm">
        <span className="text-stone-600">Total</span>
        <span className="font-semibold text-stone-800">
          $ {product.quantity * product.product.price}
        </span>
      </footer>
    </article>
  );
};

export default CartElement;
