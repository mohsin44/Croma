// import CartCard from "../components/Ui/CartCard";
import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";

const CartCard = () => {
  let currentDate = new Date();
  // Add 2 days to the current date
  currentDate.setDate(currentDate.getDate() + 2);
  // Format the result (optional)
  let DeliveryDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="cartcard col-start-1 col-end-2 w-full md:ml-[10%] md:max-w-[48.5rem] px-3 py-2 mt-12 bg-[#222222] rounded-lg max-h-[20rem] ">
      <div className=" flex pt-4 pb-2">
        <div className="flex items-center justify-center h-auto py-2 px-1 max-w-[9.4rem]">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017854/Croma%20Assets/Communication/Mobiles/Images/270656_0_p6disg.png?tr=w-400"
            alt="product image"
          />
        </div>
        <div className="ml-2 max-h-[20rem] md:p-4 w-full">
          <h3 className="line-clamp-2">
            OnePlus Nord CE 3 Lite 5G (8GB RAM, 256GB, Chromatic Gray)
          </h3>
          <div className="flex">
            <IoStarSharp className="text-[hsl(169,100%,46%)]" />
            <IoStarSharp className="text-[hsl(169,100%,46%)]" />
            <IoStarSharp className="text-[hsl(169,100%,46%)]" />
            <IoStarSharp className="text-[hsl(169,100%,46%)]" />
            <IoStarHalfOutline className="text-[hsl(169,100%,46%)]" />
          </div>
          <div className="pt-1">
            <p className="text-[12px] tracking-wide text-[hsl(0,0%,70%)]">
              ₹ 21,999.00
            </p>
            <p className="text-[7px] tracking-widest text-[hsl(0,0%,70%)]">
              (inclusive of all taxes)
            </p>
          </div>
          <div className="pt-1">
            <p className="text-xs text-[hsl(0,0%,80%)]">
              Standard Delivery by {DeliveryDate}
            </p>
          </div>
          <div>
            <div className="pt-2">
              <button className=" btn border text-[10px] px-5 py-2 rounded-lg">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
