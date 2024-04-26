import axios from "axios";
class MenuService {
  async getMenu(): Promise<any> {
    return fetch("/menu-options.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}

export default MenuService;
