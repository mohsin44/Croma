// components
import CromaLogo from "./Small_components/CromaLogo";
import MobileMenu from "./Small_components/MobileMenu";
import InputSearch from "./Small_components/InputSearch";
import DesktopMenu from "./Small_components/DesktopMenu";
import User from "./Small_components/User";
import Cart from "./Small_components/Cart";


import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-black py-2">
      <div className="_container">
        <div className="flex w-full p-2 items-center">
          <div className="flex-grow gap-4 flex items-center">
            <MobileMenu />
            <CromaLogo />
            <DesktopMenu />
            <div className="hidden md:block">
            <InputSearch />
            </div>
          </div>
          <div className="flex text-xl md:text-2xl gap-8 ml-4 items-center">
            <User />
            <NavLink to="cart"><Cart /></NavLink>
          </div>
        </div>
        <div className="block md:hidden">
            <InputSearch />
            </div>
      </div>
    </header>
  );
};

export default Header;

// header
//   div-> container
//     div
//       mobileMenu
//       Logo
//       DesktopMenu
//       Search
//     div
//       pinCode
//       User
//       Cart
