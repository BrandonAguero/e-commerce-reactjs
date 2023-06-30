import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo.jsx";
import SimilarProducts from "../components/ProductId/SimilarProducts.jsx";
import SliderImg from "../components/ProductId/SliderImg.jsx";

const ProductIdPage = () => {
  const { id } = useParams();

  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <>
      <section className="relative top-24 m-auto flex w-[90%] flex-col">
        <SliderImg product={product} />
        <ProductInfo product={product} />
        <SimilarProducts product={product} />
      </section>
    </>
  );
};

export default ProductIdPage;
