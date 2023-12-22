import React, { useState } from "react";
import Slider from "react-slick";

const CarouselSlider = ({CarouselSliderData}) => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  });

  return (
    <div>
      <Slider {...sliderSettings}>

      {CarouselSliderData.map((image) => {
          return (
            <div key={image.title}>
              <img src={image.path} alt="sliderimages" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselSlider;

