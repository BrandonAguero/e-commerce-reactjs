import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slice/cart.slice.js";

const CartElement = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(product.id));
  };

  return (
    <article>
      <header>
        <img src={product.product.images[0].url} />
      </header>
      <section>
        <h3>{product.product.title}</h3>
        <p>
          <span>{product.quantity}</span> x <span>{product.product.price}</span>
        </p>
        <button onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </section>
      <footer>
        <span>Subtotal</span>
        <span>{product.quantity * product.product.price}</span>
      </footer>
    </article>
  );
};

export default CartElement;
