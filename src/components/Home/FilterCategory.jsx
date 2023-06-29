import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import { getProductsThunk } from "../../store/slice/products.slice.js";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [categories, getAllCategories] = useFetch(baseUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
      dispatch(getProductsThunk(url));
    } else {
      dispatch(getProductsThunk());
    }
  };

  return (
    <article className="w-[90%] flex flex-col gap-2">
      <div className="text-stone-700 flex items-center justify-between cursor-pointer">
        <h3 className="font-serif font-semibold text-2xl">Category</h3>
        <i className="bx bx-chevron-down text-4xl"></i>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"></div>
      <ul className="w-[95%] self-end flex flex-col gap-2">
        <li
          className="cursor-pointer hover:text-xl"
          onClick={() => handleFilterCategory()}
        >
          All Categories
        </li>
        {categories?.map((category) => (
          <li
            className="cursor-pointer hover:text-xl"
            onClick={() => handleFilterCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
