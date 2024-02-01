import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ImagesSlider from "./ImagesSlider";
import UpperInfo from "./UpperInfo";
import BottomInfo from "./BottomInfo";
import FloatingPanel from "./FloatingPanel";

const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { _id } = useParams();

  const url = `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`;

  useEffect(() => {
    const productsDetailsFetch = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ecommerce/product/${_id}`,
          {
            headers: { projectID: "2wxufmodyvcq" },
          }
        );
        if (!response.ok) {
          throw Error("could not fetch products");
        }
        const data = await response.json();
        console.log("data:", data);
        setProductDetails(data.data);
      } catch (error) {
        console.error(error.message);
      }
      setIsLoading(false);
    };
    productsDetailsFetch();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-full">
        <div className="lg:flex w-auto justify-center mt-8">
          <ImagesSlider productDetails={productDetails}/>
          <UpperInfo productDetails={productDetails}/>
        </div>
        <BottomInfo productDetails={productDetails}/>
       <FloatingPanel productdetails={productDetails}/>
      </div>
    </>
  );
};

export default ProductDetailsPage;
