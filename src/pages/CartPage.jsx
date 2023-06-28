import { useDispatch, useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement.jsx";
import usePurchases from "../hooks/usePurchases.js";
import { setCartG } from "../store/slice/cart.slice.js";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  const totalPrice = cart?.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makePurchase } = usePurchases();
  const dispatch = useDispatch();

  const handlePurchase = () => {
    makePurchase();
    dispatch(setCartG([]));
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart?.map((product) => (
          <CartElement key={product.id} product={product} />
        ))}
      </div>
      <footer>
        <div>
          <span>Total</span>
          <span>{totalPrice}</span>
        </div>
        <button onClick={handlePurchase}>Purchase this cart</button>
      </footer>
    </div>
  );
};

export default CartPage;
