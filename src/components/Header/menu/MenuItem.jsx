import React from "react";

const MenuItem = ({ menu, handelOnHover }) => {
  return (
    <li
      className="p-x2 py-4  hover:bg-[#12daa8]"
      onMouseEnter={() => {
        handelOnHover(menu.label);
      }}
    >
      {menu.label}
    </li>
  );
};

export default MenuItem;
