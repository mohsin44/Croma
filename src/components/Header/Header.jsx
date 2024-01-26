import logo from "../../assets/CromaLogo.webp";
import { IoMenuOutline, IoPencil } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Menu from "./menu";
import Profile from "./Profile/Profile";

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between h-20">
      {/* desktop and table version */}

      <div className="w-full m-auto max-w-[1200px] px-2 relative">
        <div className="hidden items-center justify-between w-full md:flex">
          <div className="p-3 flex items-center gap-12 w-4/5">
            <NavLink to="/" className="cursor-pointer w-32 min-w-[128px]">
              <img src={logo} className="croma_logo w-full" />
            </NavLink>
            <Menu />
            <div className="flex items-center bg-white h-9 w-full max-w-md px-2 py-5 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
              />
              <CiSearch className="text-black text-2xl " />
            </div>
          </div>

          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-xl" />
              <p className="whitespace-nowrap text-xs">Vasco-da-gama 403802</p>
              <IoPencil className="text-xs" />
            </div>
            <div className=" text-2xl">
              <Profile />
            </div>
            <NavLink to="cart" className=" text-2xl relative">
              <IoMdCart />
              <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                0
              </p>
            </NavLink>
          </div>
        </div>

        {/* Mobile version */}

        <div className="md:hidden w-full ">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <IoMenuOutline className="text-3xl cursor-pointer" />
              </div>
              <NavLink to="/" className="cursor-pointer w-20 ">
                <img src={logo} className="croma_logo w-full" />
              </NavLink>
            </div>
            <div className="flex items-center gap-3 mr-2">
              <div className=" text-xl">
                <Profile />
              </div>
              <NavLink to="cart" className="text-xl relative">
                <IoMdCart />
                <p className="text-xs w-3 text-center h-3 flex items-center justify-center rounded-full bg-greenblue absolute top-0 -right-2 text-black">
                  0
                </p>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center bg-white h-7 w-full max-w-full px-2 py-5 mt-1 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-full bg-transparent outline-none border-none px-3 placeholder:text-sm text-black"
            />
            <CiSearch className="text-black text-2xl " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
