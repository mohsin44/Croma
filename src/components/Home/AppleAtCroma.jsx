import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const AppleAtCroma = ({ AppleImage, AppleSlider }) => {
  const settings = {
    infinite: false,
    className: "center",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
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
      <div className="grid grid-cols-2">
        {AppleImage.map((image) => {
          const { path1, path, name } = image;
          return (
            <div key={name} className="px-2 pb-2">
              <img className="rounded-lg md:hidden" src={path1} />
              <img className="rounded-lg xs:hidden md:block" src={path} />
            </div>
          );
        })}
      </div>
      <div className="apple-slider">
        <Slider {...settings}>
          {AppleSlider.map((image) => {
            return (
              <div key={image.name}>
                <img
                  className="rounded-lg p-2"
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

export default AppleAtCroma;
