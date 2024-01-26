import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";

const TopCategories = ({ TopCategoriesData }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="TopCategoriesSlider">
      <Slider {...settings}>
        {TopCategoriesData.map((image) => {
          return (
            <div>
              <div
                className="mx-2 rounded-xl border border-gray-700"
                key={image.name}
              >
                <img
                  className="rounded-lg"
                  src={image.path}
                  alt={`${image.name}image`}
                />
                <div className="h-[64px] p-2 flex items-center justify-center">
                  <h2 className="font-semibold xs:text-[15px] sm:text-[18px] md:text-base">
                    {image.name}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopCategories;
{
  /* <div key={image.name} className="p-2 ">
              <div className="flex flex-col items-center w-auto h-auto border border-gray-700 rounded-lg">
                <img
                  className="rounded-lg"
                  src={image.path}
                  alt={`${image.name}image`}
                />
                <div className="p-[2rem] xs:h-20 md:h-24">
                  <p className="">
                    <span className="">{image.name}</span>
                  </p>
                </div>
              </div>
            </div> */
}
