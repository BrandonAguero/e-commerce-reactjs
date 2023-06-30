import { useNavigate } from "react-router-dom";

const PurchaseCard = ({ product }) => {
  const navigate = useNavigate();

  const redirectProductId = () => {
    navigate(`/product/${product.productId}`);
  };

  return (
    <article
      onClick={redirectProductId}
      className="grid w-4/5 cursor-pointer grid-cols-4 gap-x-2 mm:grid-cols-6"
    >
      <img
        className="h-16 w-16 object-contain"
        src={product.product.images[0].url}
      />
      <h3 className="col-start-2 col-end-5 text-sm font-semibold tp:text-lg">
        {product.product.title}
      </h3>
      <div className="text-center text-sm font-semibold text-stone-700 tp:text-lg">
        <span>{product.quantity}</span>
      </div>
      <div className="col-start-6 text-center text-sm font-semibold text-stone-700 tp:text-lg">
        <span>$ {product.product.price}</span>
      </div>
    </article>
  );
};

export default PurchaseCard;
