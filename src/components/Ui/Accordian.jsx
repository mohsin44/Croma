import React, { useState } from "react";
import { SlArrowDown,SlArrowUp } from "react-icons/sl";

const Accordian = ({ data,title }) => {
  const [plus, setPlus] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setPlus(!plus);
    setShow(!show);
  };
  return (
    <div className="border rounded-lg h-auto my-6 p-[1.25rem] md:py-[1.5625rem] md:px-[2.1875rem]" >
      <div onClick={() => handleClick()} className="flex justify-between ">
        <h1 className="text-[1rem] md:text-[1.125rem] font-bold">{title}</h1>
        <button>
          {plus ? (
            <SlArrowDown />
          ) : (
            <SlArrowUp />
          )}
        </button>
      </div>
      {show && <p className="text-sm md:leading-6 py-2">{data}</p>}
      {show && <button className="flex mx-auto text-[0.75rem] font-medium border py-[0.5rem] px-[1.5625rem] rounded-[0.5rem]">Show More</button>}
      
    </div>
  );
};

export default Accordian;