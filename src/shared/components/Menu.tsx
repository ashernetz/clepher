import { useEffect, useState } from "react";
import MenuService from "../services/menu-service";
import { NavItemWithSubMenuProps } from "../interfaces/Menu.interfaces";

const Menu = () => {
  const menuService = new MenuService();
  const [menuItems, setMenuItems] = useState([]);
  const getMenu = async () => {
    const response = await menuService.getMenu();
    const data = await response.json();
    setMenuItems(data)
  };

  const renderMenuItems = () => {
    console.log(menuItems);
    return menuItems.map((item: NavItemWithSubMenuProps, index) => {
      return (
        <div className="flex flex-row">
          
        </div>
      );
    });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return <div className="flex flex-row space-x-4">{menuItems.length > 0 && renderMenuItems()}</div>;
};

export default Menu;
