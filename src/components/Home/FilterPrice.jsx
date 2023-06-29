import { useState } from "react";
import { useForm } from "react-hook-form";

const FilterPrice = ({ setPriceMinMax }) => {
  const [rotateArrow, setRotateArrow] = useState("rotate-0");
  const [hiddenSectionFilter, setHiddenSectionFilter] = useState("max-h-max");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    setPriceMinMax({ min, max });
  };

  const handleHiddenPrice = () => {
    if (rotateArrow === "rotate-180") {
      setRotateArrow("rotate-0");
      setHiddenSectionFilter("max-h-max");
    } else {
      setRotateArrow("rotate-180");
      setHiddenSectionFilter("max-h-0");
    }
  };

  return (
    <article className="w-[90%] flex flex-col gap-2">
      <div
        onClick={handleHiddenPrice}
        className="text-stone-700 flex items-center justify-between cursor-pointer"
      >
        <h3 className="font-serif font-semibold text-2xl">Price</h3>
        <i
          className={`bx bx-chevron-down text-4xl ${rotateArrow} transition-transform duration-500`}
        ></i>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"></div>
      <form
        className={`w-[95%] self-end flex-col gap-4 overflow-hidden bg-white ${hiddenSectionFilter} transition-max-h duration-500 flex`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between text-stone-950 items-center ">
          <label htmlFor="from">From</label>
          <input
            {...register("from")}
            className="text-black p-2 outline-none border-solid border-[1px] focus:shadow-md"
            type="number"
            id="from"
          />
        </div>
        <div className="flex text-stone-950 items-center justify-between">
          <label htmlFor="to">To</label>
          <input
            {...register("to")}
            className="text-black p-2 outline-none border-solid border-[1px] focus:shadow-md"
            type="number"
            id="to"
          />
        </div>
        <button className="self-end bg-red-600 text-white py-2 px-4  text-xl rounded-lg brightness-105 opacity-80 mm:mb-8">
          Filter Price
        </button>
      </form>
    </article>
  );
};

export default FilterPrice;
