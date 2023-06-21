import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct.jsx";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <h1>Home</h1>
      <main className="flex flex-col gap-4 w-[90%]">
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};

export default Home;
