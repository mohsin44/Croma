import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CustomPrevArrow = (props) => (
  <button {...props} className="custom-prev-arrow">
    <IoIosArrowBack />
  </button>
);

export const CustomNextArrow = (props) => (
  <button {...props} className="custom-next-arrow">
    <IoIosArrowForward />
  </button>
);
