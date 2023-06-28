const PurchaseCard = ({ product }) => {
  return (
    <article>
      <img src={product.product.images[0].url} />
      <h3>{product.product.title}</h3>
      <div>
        <span>{product.quantity}</span> x <span>{product.product.price}</span>
      </div>
    </article>
  );
};

export default PurchaseCard;
