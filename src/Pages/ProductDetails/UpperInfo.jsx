import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { futureDate } from "../../lib/utils";

const UpperInfo = ({ productDetails }) => {
  const { name, price, ratings, features, displayImage } = productDetails;

 
  return (
      <div className="rightSection px-[.9375rem]">
        <div className="mt-[1.25rem] md:mb-3 mb-[0.25rem]">
          <h1 className="font-switzer text-[1.25rem] leading-[1.4375rem] lg:text-[1.25rem] lg:leading-[1.4375rem] md:text-[1rem] md:leading-[1.1875rem] font-[500] ">
            {name}
          </h1>
        </div>
        <div className="mb-[0.875rem] text-[#12daa8] flex items-center gap-1">
          {ratings.toFixed(2)}
          <BsStarFill />
        </div>
        <div className="mb-[0.375rem] border-b-[.1rem] border-b-[#353535] flex flex-col pb-[0.4rem]">
          <h2 className="md:text-[1.625rem] text-[1.375rem]">
            {price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h2>
          <span className="md:text[0.75rem] text-[0.625rem]">
            (Incl.all Taxes)
          </span>
        </div>
        <div className="line-through mt-[0.625rem] mb-[0.3125rem] md:mb-[0.375rem] md:text-[0.875rem] text-[0.75rem] text-[#9A9A9A]">
          MRP:{" "}
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
        <div className="mt-[0.563rem] py-[0.625rem] pl-[0.688rem] pr-[0.0625rem] bg-[#353535] rounded-lg">
          <h3 className="flex items-center gap-1 text-[0.75rem]">
            <span>
              <MdLocationOn />
            </span>
            Delivery at:
            <span className="text-[#12DAA8] underline">Vasco Goa, 403802</span>
          </h3>
          <p className="text-[0.625rem] ml-4">
            Will be delivered by {futureDate}
          </p>
        </div>
        <div className="border-2 border-[#353535] rounded-lg  mt-[0.9375rem] pt-[1.25rem] pr-[0.9375rem] pb-[0.3125rem] pl-[1rem] lg:pr-[2.9375rem] ">
          <h2 className="font-medium text-[1rem] leading-[1.1875rem] md:text-[0.875rem] md:leading-[1.0625rem]">
            Key Features
          </h2>
          <div className="p-[0.9375rem]">
            {features.map((feature, index) => {
              return (
                <ul
                  className="list-disc font-normal text-[0.875rem] leading-[1.5625rem] md:leading-[1.125rem]"
                  key={index}
                >
                  <li className="">{feature}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    
  );
};

export default UpperInfo;



