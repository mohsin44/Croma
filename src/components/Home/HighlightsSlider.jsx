import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const HighlightsSlider = ({ HighlightsSliderData1, HighlightsSliderData2 }) => {
  const settings = {
    infinite: false,
    speed: 500,
    // className: "center",
    // centerPadding: "60px",
    slidesToShow: 3,
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
          arrows: false,

          // infinite: false,
          // dots: true
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,

          // infinite: false,
          // dots: true
        },
      },
    ],
  };
  return (
    <>
      <div className="highlight1 overflow-x-hidden">
        <Slider {...settings}>
          {HighlightsSliderData1.map((image) => {
            return (
              <div key={image.name} className="p-2">
                <img
                  className="rounded-lg"
                  src={image.path}
                  alt={`${image.name}image`}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="highlight2">
        <Slider {...settings}>
          {HighlightsSliderData2.map((image) => {
            return (
              <div key={image.name} className="p-2">
                <img
                  className="rounded-lg"
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

export default HighlightsSlider;

// {HighlightsSliderData.map((image) => {
//     return (
//       <div key={image.title} className="max-w-[20rem]">
//         <img
//           className="rounded-lg"
//           src={image.path}
//           alt="Highlights image"
//         />
//       </div>
//     );
//   })}
