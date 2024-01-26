import React from "react";
import { MenuData } from "../../../Data";
import MenuList from "./MenuList";

const MenuWrapper = ({ handleClose }) => {
  return (
    <>
      <div
        className="fixed bottom-0 top-[80px] right-0 left-0 bg-[#393939] opacity-80 z-40"
        onClick={handleClose}
      />
      <div className="min-w-[37%] h-[85vh] mt-2 absolute top-full border z-50">
        <div className="flex  h-full">
          <div className="h-full overflow-y-auto  bg-[#191919]">
            <h4>Shop by Category</h4>

            <MenuList menus={MenuData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuWrapper;
