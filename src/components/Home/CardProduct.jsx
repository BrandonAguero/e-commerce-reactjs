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
        className="max-h-[600px] w-full max-w-[280px] cursor-pointer rounded-xl border border-solid border-gray-400 hover:scale-105 mm:max-w-[300px]"
      >
        <header className="group relative aspect-square border-b border-solid border-gray-400">
          <img
            className="m-auto h-[90%] w-[90%] object-contain opacity-100 transition-opacity duration-700 group-hover:opacity-0"
            src={product.images[0].url}
            alt=""
          />
          <img
            className="absolute top-0 h-full w-full object-contain opacity-0 transition-opacity duration-700 group-hover:opacity-100  "
            src={product.images[1].url}
            alt=""
          />
        </header>
        <section className="grid grid-cols-2 grid-rows-2 gap-4 pb-8 pl-4 pr-4 pt-6">
          <div className="col-span-2 row-span-1">
            <h3 className="text-base font-light ">{product.brand}</h3>
            <h2 className="text-2xl font-medium">{product.title}</h2>
          </div>
          <div className="row-span-2 ">
            <span className="text-base font-light">Price</span>
            <h3 className="text-2xl font-medium">{product.price}</h3>
          </div>
          <button
            onClick={handleAddCart}
            className="relative right-4 top-8 aspect-square w-16 justify-self-center rounded-[50%] bg-red-600 text-2xl text-white hover:brightness-110"
          >
            <i className="bx bx-cart-alt"></i>
          </button>
        </section>
      </article>
    </>
  );
};

export default CardProduct;
