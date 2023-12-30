import React, { useState } from "react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const CategoriesSlider = ({ CategoriesSliderData }) => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          arrows: false,
        },
      },
    ],
  });

  return (
    <Slider className="catogoriesslider" {...settings}>
      {CategoriesSliderData.map((category) => {
        return (
          <div key={category.title}>
            <img src={category.path} alt="categoryslider" />
          </div>
        );
      })}
    </Slider>
  );
};

export default CategoriesSlider;
