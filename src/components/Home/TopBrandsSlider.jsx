import React, { useState } from "react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const TopBrands = ({ TopBrandsSliderData }) => {
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
          slidesToShow: 9.5,
          slidesToScroll: 7,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5.7,
          slidesToScroll: 4,
          rows: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.7,
          slidesToScroll: 4,
          rows: 2,
          arrows: false,
        },
      },
    ],
  });

  return (
    <Slider className="topbrands" {...settings}>
      {TopBrandsSliderData.map((image) => {
        return (
          <div key={image.name}>
            <img src={image.path} alt={`${image.name}image`} />
          </div>
        );
      })}
    </Slider>
  );
};

export default TopBrands;
