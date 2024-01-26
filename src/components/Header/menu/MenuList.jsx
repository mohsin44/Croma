import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowForward } from "react-icons/io";

const MenuList = ({ menus }) => {
  const [menuHovered, setMenuHovered] = useState("");
  const [subMenu, setSubMenu] = useState([]);
  const handelOnHover = (menuName) => {
    setMenuHovered(menuName);
    const subMenuObj = menus.find((menu) => menuName === menu.name);
    subMenuObj.children ? setSubMenu(subMenuObj.children) : setSubMenu([]);
  };
  return (
    <div className="flex">
      <ul className=" w-80 h-full">
        <h4>
          {menus.map((menu) => (
            <a href="#" className="flex items-center ">
              <h4>
                <MenuItem menu={menu} handelOnHover={handelOnHover} />
              </h4>
              <span className="justify-self-end">
                <IoIosArrowForward />
              </span>
            </a>
          ))}
        </h4>
      </ul>
      {menuHovered !== "" && <MenuList menus={subMenu} />}
    </div>
  );
};

export default MenuList;
