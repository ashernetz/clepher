import { useState } from "react";
import DropdownMenu from "./DropDownMenu";

const DropDown = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={() => setIsOpen(true)}>
      <button
        onClick={toggleMenu}
        type="button"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
      >
        {item?.title}
      </button>
      <DropdownMenu
        isOpen={isOpen}
        closeMenu={closeMenu}
        onMouseLeave={() => closeMenu()}
        subMenus={item?.subMenus}
        id={item?.id}
      />
    </div>
  );
};

export default DropDown;
