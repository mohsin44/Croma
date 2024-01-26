import React from 'react'
import Image from '../../components/Ui/Image';

const FloatingPanel = ({productdetails}) => {
    const { name, price, displayImage } = productdetails;
  return (
    <div className="h-[4.375rem] md:px-[3.125rem] bg-[#191919] sticky bottom-0 right-0 left-0 flex items-center">
    <div className="hidden md:flex flex-1 items-center">
      <Image
        className="w-[2.5rem]  object-contain mr-2"
        src={displayImage}
        alt="productImage"
      />
      <div className="font-medium text-[0.875rem] leading-[1.0625rem]">
        <h2 className="line-clamp-1">{name}</h2>
        <span>
          {" "}
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
      </div>
    </div>
    <div className="flex-1 hidden md:flex md:items-center md:justify-center">
      <buttton className="bg-[#12DAA8] py-[1.5rem] md:py-[0.75rem] md:px-[1.25rem] text-[#191919] font-bold leading-[0.875rem] text-[0.875rem] md:rounded-[0.5rem] md:mr-[0.625rem]">
        Buy Now
      </buttton>
      <buttton className="bg-[#353535] py-[1.5rem] md:py-[0.6875rem] md:px-[1.25rem] font-bold leading-[0.875rem] text-[0.875rem] md:rounded-[0.5rem] md:border">
        Add to Cart
      </buttton>
    </div>
    <div className="w-full grid grid-cols-2 md:hidden">
      <buttton className="bg-[#12DAA8] flex-1 flex items-center justify-center py-[1.5rem] text-[#191919] font-bold leading-[0.875rem] text-[0.875rem]">
        Buy Now
      </buttton>
      <buttton className="bg-[#353535] flex-1 flex items-center justify-center py-[1.5rem] font-bold leading-[0.875rem] text-[0.875rem] ">
        Add to Cart
      </buttton>
    </div>
  </div>
  )
}

export default FloatingPanel