import { useState } from "react";
import { useForm } from "react-hook-form";

const FilterPrice = ({ setPriceMinMax }) => {
  const [hiddenFilterPrice, setHiddenFilterPrice] = useState("flex");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    setPriceMinMax({ min, max });
  };

  const handleHiddenPrice = () => {
    setHiddenFilterPrice("hidden");
  };

  return (
    <article className="w-[90%] flex flex-col gap-2">
      <div
        onClick={handleHiddenPrice}
        className="text-stone-700 flex items-center justify-between cursor-pointer"
      >
        <h3 className="font-serif font-semibold text-2xl">Price</h3>
        <i className="bx bx-chevron-down text-4xl"></i>
        <i className="bx bx-chevron-up text-4xl hidden"></i>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"></div>
      <form
        className={`w-[95%] self-end ${hiddenFilterPrice} flex-col gap-4 bg-white`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between text-stone-950 items-center">
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
        <button className="self-end bg-red-600 text-white py-2 px-4  text-xl rounded-lg brightness-105 opacity-80">
          Filter Price
        </button>
      </form>
    </article>
  );
};

export default FilterPrice;
