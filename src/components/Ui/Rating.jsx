import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Rating = ({ ratings }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {ratings >= index + 1 ? (
          //rating=3.5
          <BsStarFill className="text-[#12daa8]" />
        ) : ratings >= number ? (
          <BsStarHalf className="text-[#12daa8]" />
        ) : (
          <BsStar className="text-[#D9D9D9]" />
        )}
      </span>
    );
  });
  return <div className="flex gap-1">{ratingStar}</div>;
};

export default Rating;
