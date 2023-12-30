import React from "react";
import CartCard from "../components/Ui/CartCard";

const CartPage = () => {
  return (
    <div className="md:grid md:grid-cols-2">
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />

      <div className="mt-8 row-start-1 col-start-2 bg-[#222222] rounded-lg p-4 h-[11rem] md:mr-[2.5rem] md:sticky md:top-12 md:min-w-[18.5rem] md:mt-12 md:place-self-end ">
        <h3 className="pb-2 font-semibold">
          Order Summary <span>(orders)</span>
        </h3>
        <div className="pb-2 text-xs flex">
          <p>original Price</p>
          <p className="ml-auto">₹ 20,000.00</p>
        </div>
        <div className="flex text-sm pb-6">
          <p>Total</p>
          <p className="ml-auto">₹ 20,000.00</p>
        </div>
        <button className="text-black bg-[hsl(169,100%,46%)] w-full rounded-lg py-2 font-bold text-xs">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
