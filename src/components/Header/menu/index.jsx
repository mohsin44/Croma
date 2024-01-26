import React, { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import MenuWrapper from "./MenuWrapper";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center cursor-pointer"
        onClick={() => setIsMenuOpen((curr) => !curr)}
      >
        <span className="text-3xl">
          {isMenuOpen ? <IoClose /> : <IoMenuOutline />}
        </span>

        <p className="text-xs font-semibold tracking-wide">Menu</p>
      </button>

      {isMenuOpen && <MenuWrapper handleClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Menu;
