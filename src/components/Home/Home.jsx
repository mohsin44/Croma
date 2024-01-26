// Data
import {
  AppleSlider,
  AppleImage,
  BestSellingDeals,
  HeroSliderImages,
  CategoriesSliderImages,
  HighlightsSliderData1,
  HighlightsSliderData2,
  TopBrandsSliderData,
  NewAtCromaData,
  NewAtCromaSliderData,
  TopCategoriesData,
} from "../../Data";
// Components
import Hero from "./Hero";
import CategoriesSlider from "./CategoriesSlider";
import ProductSlider from "./ProductsSlider";
import HighlightsSlider from "./HighlightsSlider";
import Bestselling from "./Bestselling";
import AppleAtCroma from "./AppleAtCroma";
import TopBrandsSlider from "./TopBrandsSlider";
import NewAtCroma from "./NewAtCroma";
import TopCategories from "./TopCategories";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <Hero HeroSliderImages={HeroSliderImages} />

      <div className="my-16 w-full md:w-[80%] mx-auto">
        {/* Categories Slider */}
        <CategoriesSlider CategoriesSliderImages={CategoriesSliderImages} />

        {/* Deals of the day slider */}
        <h2 className="titles">Deals of the Day</h2>
        <ProductSlider sort={{ price: "1" }} />

        {/* Highlights Section */}
        <h2 className="titles">Highlights</h2>
        <HighlightsSlider
          HighlightsSliderData1={HighlightsSliderData1}
          HighlightsSliderData2={HighlightsSliderData2}
        />

        {/* Top Trending deals slider */}
        <h2 className="titles">Top Trending Deals</h2>
        <ProductSlider filter={{ sellerTag: "trending" }} />

        {/* Best Selling Deals slider*/}
        <h2 className="titles">Best Selling Deals</h2>
        <Bestselling BestSellingDeals={BestSellingDeals} />

        {/* Apple At Croma Section*/}
        <h2 className="titles">Apple At Croma</h2>
        <AppleAtCroma AppleImage={AppleImage} AppleSlider={AppleSlider} />

        {/* New At Croma Section*/}
        <h2 className="titles">New At Croma</h2>
        <NewAtCroma
          NewAtCromaData={NewAtCromaData}
          NewAtCromaSliderData={NewAtCromaSliderData}
        />
        {/* Deals on audio */}
        <h2 className="titles">Deals on Audio</h2>
        <ProductSlider
          filter={{ subCategory: "audio" }}
          sort={{ price: "1" }}
        />

        {/* Television Slider */}
        <h2 className="titles">Television</h2>
        <ProductSlider filter={{ subCategory: "tv" }} />

        {/* Air Conditioner Slider */}
        <h2 className="titles">Air Conditioners</h2>
        <ProductSlider filter={{ subCategory: "ac" }} />

        {/* Tablets Slider */}
        <h2 className="titles">Tablets</h2>
        <ProductSlider filter={{ subCategory: "tablet" }} />

        {/* Tablets Refrigerators */}
        <h2 className="titles">Refrigerators</h2>
        <ProductSlider filter={{ subCategory: "refrigerator" }} />

        {/* Tablets Washing Machine */}
        <h2 className="titles">Washing Machine</h2>
        <ProductSlider filter={{ subCategory: "washingMachine" }} />

        {/* Top brands Slider */}
        <h2 className="titles">Top Brands</h2>
        <TopBrandsSlider TopBrandsSliderData={TopBrandsSliderData} />

        {/* Top brands Categories */}
        <h2 className="titles">Top Categories</h2>
        <TopCategories TopCategoriesData={TopCategoriesData} />
      </div>
    </>
  );
};

export default Home;
