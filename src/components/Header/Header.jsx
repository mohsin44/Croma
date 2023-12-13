// icons
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";

// components
import Croma_logo from "./Croma_logo";
import Menu_logo from "./Menu_logo";
import Input_search_field from "./Input_search_field";

const Header = () => {
  return (
    <header className="bg-black sticky top-0 left-0 right-0 z-10 text-white">
      <div className="container m-auto">
        <div className="flex items-center py-3">
          <div className="flex flex-grow items-center gap-2">
            <Croma_logo />
            <Menu_logo />
            <Input_search_field />
          </div>
          <h3 className="flex items-center">
            <BsFillPersonFill className="mr-8" />
            <IoMdCart />
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
