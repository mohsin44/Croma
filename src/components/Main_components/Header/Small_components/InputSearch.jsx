import { IoSearchOutline } from "react-icons/io5";

const Input_search_field = () => {
  return (
    <div className="flex items-center max-w-[480px] w-full bg-white text-black rounded-lg px-2 py-1">
      <input
        type="text"
        placeholder="What are you looking for"
        className="rounded px-4 py-2 w-96 text-black outline-none flex-1" 
      ></input>
     
       <IoSearchOutline  />
    
    </div>
  );
};

export default Input_search_field;
