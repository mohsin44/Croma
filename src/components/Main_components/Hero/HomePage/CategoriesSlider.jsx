import React, { useState } from "react";
import Slider from "react-slick";

const CategoriesSlider = ({CategoriesSliderData}) => {
  const [settings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  return (
    
      <Slider className="catogoriesslider" {...settings}>
      {CategoriesSliderData.map((category)=>{
          return(
            <div  key={category.title}>
              <img src={category.path} alt="categoryslider" /></div> 
          )
        })}
      </Slider>
    
  );
};

export default CategoriesSlider;
