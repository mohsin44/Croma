import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { cn } from "../../lib/utils";

const Accordian = ({ children, title }) => {
  // const [plus, setPlus] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  const handleClick = () => {
    setIsOpen((previous) => !previous);
  };
  return (
    <div className="border rounded-lg h-auto my-6 p-[1.25rem] md:py-[1.5625rem] md:px-[2.1875rem]">
      <div onClick={() => handleClick()} className="flex justify-between ">
        <h1 className="text-[1rem] md:text-[1.125rem] font-bold">{title}</h1>
        <button>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</button>
      </div>
      {isOpen && (
        <p
          className={cn(
            "text-sm md:leading-6 py-2",
            viewMore ? "h-auto" : "h-[8rem] overflow-hidden"
          )}
        >
          {children}
        </p>
      )}
      {isOpen && (
        <button
          onClick={() => setViewMore((prev) => !prev)}
          className="flex mx-auto text-[0.75rem] font-medium border py-[0.5rem] px-[1.5625rem] rounded-[0.5rem]"
        >
          {viewMore ? "View less": "View more"}
        </button>
      )}
    </div>
  );
};

export default Accordian;
