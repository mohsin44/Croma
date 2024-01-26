import React, { useState } from "react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const CategoriesSlider = ({ CategoriesSliderImages }) => {
  const [settings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 8,
    initialSlide: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.6,
          slidesToScroll: 4.6,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4.5,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4.5,
          rows: 2,
          arrows: false,
        },
      },
    ],
  });

  return (
    <Slider className="catogoriesslider" {...settings}>
      {CategoriesSliderImages.map((category) => {
        return (
          <div key={category.name}>
            <img src={category.path} alt={`${category.name}image`} />
          </div>
        );
      })}
    </Slider>
  );
};

export default CategoriesSlider;
