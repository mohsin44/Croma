import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const NewAtCroma = ({ NewAtCromaData, NewAtCromaSliderData }) => {
  const settings = {
    infinite: false,
    speed: 500,
    className: "center",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          // infinite: false,
          // dots: true
        },
      },
    ],
  };
  return (
    <>
      <div className="NewAtCroma2image grid grid-cols-2">
        {NewAtCromaData.map((image) => {
          return (
            <div key={image.name} className="px-2 pb-2">
              <img
                className="rounded-lg"
                src={image.path}
                alt={`${image.name}image`}
              />
            </div>
          );
        })}
      </div>
      <div className="NewAtCromaSlider">
        <Slider {...settings}>
          {NewAtCromaSliderData.map((image) => {
            return (
              <div key={image.name}>
                <img
                  className="rounded-[1.2rem] p-2"
                  src={image.path}
                  alt={`${image.name}image`}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewAtCroma;
