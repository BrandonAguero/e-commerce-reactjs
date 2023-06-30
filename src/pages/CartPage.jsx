import { useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement.jsx";
import usePurchases from "../hooks/usePurchases.js";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  const totalPrice = cart?.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makePurchase } = usePurchases();

  const handlePurchase = () => {
    makePurchase();
  };

  return (
    <div className="relative top-16 flex h-screen w-screen flex-col items-center gap-2">
      <h2 className="w-4/5 text-xl font-bold text-stone-700">Shopping Cart</h2>
      <div className="flex h-[60%] w-4/5 flex-col gap-2 overflow-y-scroll">
        {cart?.map((product) => (
          <CartElement key={product.id} product={product} />
        ))}
      </div>
      <footer className="z-20 flex h-[20%] w-4/5 flex-col items-center justify-center gap-2 bg-white font-serif">
        <div className="flex w-full justify-between font-semibold">
          <span className="text-stone-600">Total</span>
          <span className="text-stone-800">$ {totalPrice}</span>
        </div>
        <button
          className="w-48 bg-red-500 p-1 text-white hover:brightness-110"
          onClick={handlePurchase}
        >
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default CartPage;
