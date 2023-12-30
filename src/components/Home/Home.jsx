// Components
import Hero from "./Hero";
import CategoriesSlider from "./CategoriesSlider";

// Data
import { CarouselSliderData, CategoriesSliderData } from "../../Data";
import ProductSlider from "../Ui/ProductsSlider";

const Home = () => {
  return (
    <>
      <Hero CarouselSliderData={CarouselSliderData} />
      <div className="my-16 w-[80%] mx-auto">
        <CategoriesSlider CategoriesSliderData={CategoriesSliderData} />
        <h2 className="titles">Deals of the Day</h2>
        <ProductSlider sort={{ price: "1" }} />
        <h2 className="titles">Television</h2>
        <ProductSlider filter={{ subCategory: "tv" }} />
        <h2 className="titles">Trending</h2>
        <ProductSlider filter={{ sellerTag: "trending" }} />
      </div>
    </>
  );
};

export default Home;
