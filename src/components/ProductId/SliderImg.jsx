import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const SliderImg = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? product.images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === product.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const images = product?.images.map((image) => image.url) || [];

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      {images.length > 0 && (
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-contain duration-500 bg-no-repeat"
        ></div>
      )}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hidden group-hover:block left-full">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default SliderImg;
