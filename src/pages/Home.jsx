import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct.jsx";
import { useState } from "react";
import FilterCategory from "../components/Home/FilterCategory.jsx";
import FilterPrice from "../components/Home/FilterPrice.jsx";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [hiddenFilters, setHiddenFilters] = useState("hidden");
  const [inputValue, setInputValue] = useState("");

  const [priceMinMax, setPriceMinMax] = useState({
    min: 0,
    max: Infinity,
  });

  const handleSearchName = (e) => {
    setInputValue(e.target.value);
  };

  const cbFilter = (product) =>
    product.title.toLowerCase().includes(inputValue.toLowerCase());

  const cbFilterPrice = (product) => {
    const condMin = priceMinMax.min <= product.price;
    const condMax = product.price <= priceMinMax.max;
    return condMin && condMax;
  };

  const openProductFilters = () => {
    setHiddenFilters("translate-x-0");
  };
  const hiddenProductFilters = () => {
    setHiddenFilters("translate-x-full");
  };

  return (
    <>
      <aside
        className={`${hiddenFilters} duration-500 transition-transform ease-linear fixed bg-white w-screen h-screen top-0 z-10 flex flex-col items-center`}
      >
        <button
          onClick={hiddenProductFilters}
          className="text-4xl text-gray-900 mm:text-5xl self-end"
        >
          <i className="bx bx-x"></i>
        </button>
        <h2 className="font-serif text-3xl font-bold text-stone-700 w-[90%]">
          Filters
        </h2>
        <FilterPrice setPriceMinMax={setPriceMinMax} />
        <FilterCategory />
      </aside>
      <main className="flex flex-col gap-8 w-full items-center">
        <header className="flex flex-col items-center w-max gap-4">
          <div className="flex">
            <input
              type="text"
              className="border-solid  focus:shadow-md outline-none border-gray-400 border-t-[1px] border-b-[1px] border-l-[1px] font-sans p-2 placeholder:text-gray-300"
              value={inputValue}
              onChange={handleSearchName}
              placeholder="What are you looking"
            />
            <i className="bx bx-search text-white bg-red-600 flex place-items-center p-2 cursor-pointer text-xl mm:text-3xl"></i>
          </div>
          <button
            onClick={openProductFilters}
            className="text-gray-400 text-4xl mm:text-5xl self-end flex items-center"
          >
            <i className="bx bx-filter-alt"></i>
            <span className="font-sans text-2xl mm:text-3xl">Filters</span>
          </button>
        </header>
        <section className="flex flex-wrap mg:gap-16 w-full justify-center gap-8">
          {products
            ?.filter(cbFilter)
            .filter(cbFilterPrice)
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </section>
      </main>
    </>
  );
};

export default Home;
