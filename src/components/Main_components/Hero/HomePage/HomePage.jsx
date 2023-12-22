// Components
import CarouselSlider from "./CarouselSlider";
import CategoriesSlider from "./CategoriesSlider";
import Products from "./Products";


// Data
import { CarouselSliderData, CategoriesSliderData } from "../../../../Data";

const HomePage = () => {
  return (
    <>
    <div>
    <CarouselSlider CarouselSliderData={CarouselSliderData} />
    <div className="w-[80%] m-auto">
    <div className="categoriesslider my-16 ">
      <CategoriesSlider CategoriesSliderData={CategoriesSliderData} />
    </div>
    <Products/>
    </div>
    </div>
    </>
  );
};

export default HomePage;
