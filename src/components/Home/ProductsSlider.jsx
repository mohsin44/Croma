import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "../Ui/Image";
import { CustomNextArrow, CustomPrevArrow } from "../Ui/CustomArrows";
import Rating from "../Ui/Rating";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";


const ProductSlider = ({ filter, sort }) => {

  const productsUrl =
  "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?";
  
   const [products, setProducts] = useState([]);
useEffect(() => {
 const productsFetch = async () => {
    try {
      const response = await fetch(`${productsUrl}${params.toString()}`, {
        headers: { projectID: "2wxufmodyvcq" },
      });
      if (!response.ok) {
        throw Error("could not fetch products");
      }
      const json = await response.json();
      console.log(json);
      setProducts(json.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  productsFetch();
}, []);

  const params = new URLSearchParams();
  if (filter !== undefined) {
    params.set("filter", JSON.stringify(filter));
  }
  if (sort !== undefined) {
    params.set("sort", JSON.stringify(sort));
  }
  params.set("limit", "20");
  console.log(params.toString());

  const [settings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // lazyLoading: "ondemand",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {

          slidesToShow: 4.5,
          arrows: false,
        },
      },
      {
        breakpoint: 735,
        settings: {

          slidesToShow: 4.3,
          arrows: false,
        },
      },
      {
        breakpoint: 705,
        settings: {

          slidesToShow: 4.1,
          arrows: false,
        },
      },
      {
        breakpoint: 690,
        settings: {

          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {

          slidesToShow: 3.7,
          arrows: false,
        },
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 3.5,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {

          slidesToShow: 3.2,
          arrows: false,
        },
      },
      {
        breakpoint: 525,
        settings: {

          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 475,
        settings: {

          slidesToShow: 2.8,
          arrows: false,
        },
      },
      {
        breakpoint: 435,
        settings: {

          slidesToShow: 2.5,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {

          slidesToShow: 2.2,
          arrows: false,
        },
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.8,
          arrows: false,
        },
      },
    ],
  });
  return (
    <div className="productslider">
      {products.length > 0 ? (
      <Slider {...settings} >
        {products.map((product) => {
          const { _id, name, price, ratings, displayImage } = product;
          return (
            <div
              className="w-[260px] bg-[#121212] rounded-lg transition-all duration-500 ease-in p-[15px] relative"
              key={_id}
            >
              <span className="absolute right-5 top-9 text-xl">
                <IoMdHeartEmpty />
              </span>
              <NavLink to={`/product/${_id}`}>
                <div className="w-[116px] h-[116px] overflow-hidden block mt-[10px] mx-auto mb-[15px] md:w-[150px] md:h-[200px]">
                  <Image
                    src={displayImage}
                    alt={name}
                    className="h-full w-full transition-opacity duration-300 opacity-100"
                  />
                </div>
                <div className="">
                  <p className="min-h-[36px] md:min-h-[37px] leading-[16px] md:leading-[1.25]  mb-[1px] md:mb-[14px] overflow-hidden text-ellipsis line-clamp-2 font-medium text-[10px] md:text-[18px]">
                    {name}
                  </p>
                  <div className="min-h-[41px] md:min-h-[20px] flex-wrap flex items-center my-[5px] md:mt-[14px] md:mb-[8px]">
                    <span className="text-[14px] md:text-[20px] leading-[1] font-medium flex items-center">
                      {price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                    <span className="ml-0 mt-[1px] md:mt-0 text-[10px] md:text-[14px] flex items-center text-[#9A9A9A] line-through">
                      {price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                  </div>
                  <Rating ratings={ratings} />
                </div>
              </NavLink>
            </div>
          );
        })}
      </Slider>
      ):(<p>Loading...</p>
      )}
    </div>
  );
};

export default ProductSlider;
