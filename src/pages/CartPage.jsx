import { useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement.jsx";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart?.map((product) => (
          <CartElement key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
