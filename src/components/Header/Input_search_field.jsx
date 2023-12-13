import { IoSearchOutline } from "react-icons/io5";

const Input_search_field = () => {
  return (
    <div className="flex w-full max-w-[480px] items-center">
      <input
        type="search"
        placeholder="Search"
        className=" px-5 py-3 text-sm outline-0 text-black bg-white rounded"
      ></input>
      <IoSearchOutline className="w-4 mt-0.5 text-gray-600 -ml-16" />
    </div>
  );
};

export default Input_search_field;
