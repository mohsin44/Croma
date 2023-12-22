import { IoMenuOutline } from "react-icons/io5";

const DesktopMenu = () => {
  return (
    <div className=" items-center text-xs font-semibold cursor-pointer hidden md:flex">
        <IoMenuOutline className="text-3xl"/>
        Menu
    </div>
  );
};

export default DesktopMenu;