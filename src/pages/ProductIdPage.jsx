import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo.jsx";

const ProductIdPage = () => {
  const { id } = useParams();

  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <>
      <ProductInfo product={product} />
    </>
  );
};

export default ProductIdPage;
