import React from "react";

const Bestselling = ({ BestSellingDeals }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 ">
      {BestSellingDeals.map((image) => {
        return (
          <div key={image.name}>
            <img
              className="rounded-lg"
              src={image.path}
              alt={`${image.name}image`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Bestselling;
