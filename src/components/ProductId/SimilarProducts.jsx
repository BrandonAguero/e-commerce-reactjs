import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import CardProduct from "../Home/CardProduct.jsx";

const SimilarProducts = ({ product }) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";

  const [productByCategory, getProductByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductByCategory(`/products?categoryId=${product.category.id}`);
    }
  }, [product]);

  return (
    <article>
      <h2>Similar Products</h2>
      <div className="flex flex-col gap-8">
        {productByCategory?.map((prod) => {
          if (product.id !== prod.id)
            return <CardProduct key={prod.id} product={prod} />;
        })}
      </div>
    </article>
  );
};

export default SimilarProducts;
