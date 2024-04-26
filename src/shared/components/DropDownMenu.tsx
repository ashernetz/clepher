import { Link } from "react-router-dom";
import { getMenuLink } from "../utils/generalFunctions";
const DropdownMenu = ({ isOpen, closeMenu, subMenus, id }: any) => {
  const renderOptions = () => {
    return subMenus.map((item: any, index: number) => {
      return (
        <Link
          key={index}
          to={`${getMenuLink(id)}/${item.link}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.title}
        </Link>
      );
    });
  };
  return (
    <div
      onMouseEnter={() => {}}
      className={`${
        isOpen ? "block" : "hidden"
      } absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}
    >
      <div className="py-1" onMouseLeave={closeMenu}>
        {renderOptions()}
      </div>
    </div>
  );
};

export default DropdownMenu;
