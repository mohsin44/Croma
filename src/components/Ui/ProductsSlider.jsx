import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import Image from "./Image";
import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

const ProductSlider = ({ filter, sort }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsLoader = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?${params.toString()}`,
          { headers: { projectID: "2wxufmodyvcq" } }
        );
        if (!response.ok) {
          throw Error("could not fetch products");
        }
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    productsLoader();
  }, []);
  const params = new URLSearchParams();
  if (filter !== undefined) {
    params.set("filter", JSON.stringify(filter));
  }
  if (sort !== undefined) {
    params.set("sort", JSON.stringify(sort));
  }
  params.set("limit", "10");
  console.log(params.toString());

  const [settings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // lazyLoading: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  return (
    <div className="productslider">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className="p-2">
              <div className="px-2 bg-[#121212] rounded-lg">
                <div className="h-[19.1rem] w-auto">
                  <a className="h-[14.6rem] w-[11.63rem]" href="">
                    <div className="flex items-center justify-center w-auto h-[11rem]">
                      <Image
                        className="w-[7.3rem] h-[7.3rem]"
                        url={product.displayImage}
                        alt={product.name}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="ml-2 line-clamp-2">{product.name}</p>
                      <div>
                        <span className="ml-2 text-md text-semibold">
                          ₹ {product.price}
                        </span>

                        <span className="text-[10px] text-[#9A9A9A] line-through">
                          ₹ {Number(product.price) + product.price / 2}
                        </span>
                      </div>
                      <div className="flex ml-2 text-[#12daa8]">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarHalfOutline />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
//try catch
//promises
//async await
//async .then .catch .finally
