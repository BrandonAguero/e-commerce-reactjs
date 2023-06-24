import { useNavigate } from "react-router-dom";
import { postCartThunk } from "../../store/slice/cart.slice.js";
import { useDispatch } from "react-redux";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(product));
  };

  return (
    <>
      <article
        onClick={handleDetail}
        className="w-full min-w-[32rem] border border-solid border-gray-400 rounded-xl max-w-[33rem] cursor-pointer hover:scale-105"
      >
        <header className="relative border-b border-solid border-gray-400 aspect-square group">
          <img
            className="w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-700"
            src={product.images[0].url}
            alt=""
          />
          <img
            className="absolute object-contain top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700  "
            src={product.images[1].url}
            alt=""
          />
        </header>
        <section className="pt-6 pr-4 pl-4 pb-8 grid-cols-2 grid-rows-2 gap-4 grid">
          <div className="row-span-1 col-span-2">
            <h3 className="font-light text-base ">{product.brand}</h3>
            <h2 className="font-medium text-2xl">{product.title}</h2>
          </div>
          <div className="row-span-2 ">
            <span className="font-light text-base">Price</span>
            <h3 className="font-medium text-2xl">{product.price}</h3>
          </div>
          <button
            onClick={handleAddCart}
            className="aspect-square w-16 justify-self-center text-2xl rounded-[50%] relative right-4 bg-red-600 text-white hover:brightness-110 top-8"
          >
            <i className="bx bx-cart-alt"></i>
          </button>
        </section>
      </article>
    </>
  );
};

export default CardProduct;
