import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct.jsx";
import { useEffect, useState } from "react";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [inputValue, setInputValue] = useState("");

  const handleSearchName = (e) => {
    setInputValue(e.target.value);
  };

  const cbFilter = (product) =>
    product.title.toLowerCase().includes(inputValue.toLowerCase());

  return (
    <>
      <h1>Home</h1>
      <input type="text" value={inputValue} onChange={handleSearchName} />
      <main className="flex flex-col gap-8 w-[90%] gap">
        {products?.filter(cbFilter).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};

export default Home;
