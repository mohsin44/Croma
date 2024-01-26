import React, { useState } from "react";
import Slider from "react-slick";

const Hero = ({ HeroSliderImages }) => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });

  return (
    <div>
      <Slider {...sliderSettings}>
        {HeroSliderImages.map((image) => {
          return (
            <div key={image.name}>
              <img src={image.path} alt="sliderimages" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
