import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImg = ({ product }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: "flex",
          background: "black",
          borderRadius: "50%",
          width: "1.8rem",
          height: "1.8rem",
          justifyContent: "center",
          alignItems: "center",
          top: "6rem",
        }}
      ></div>
    );
  };

  const images = product?.images.map((image) => {
    return image.url;
  });

  const settings = {
    customPaging: function (i) {
      return (
        <figure
          style={{
            transform: i === activeSlide ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s",
            width: "3rem",
            height: "3rem",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            src={images[i]}
          />
        </figure>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          gap: "3rem",
          listStyle: "none",
          justifyContent: "center",
          position: "relative",
          top: "1rem",
        }}
      >
        {dots.map((dot, index) => (
          <li key={index}>{dot}</li>
        ))}
      </ul>
    ),
  };

  return (
    <Slider
      className="m-auto flex h-[20rem] w-[90%] flex-col gap-4"
      {...settings}
    >
      {images?.map((image, index) => (
        <figure key={index}>
          <img className="m-auto h-44 w-44 object-contain" src={image} />
        </figure>
      ))}
    </Slider>
  );
};

export default SliderImg;
