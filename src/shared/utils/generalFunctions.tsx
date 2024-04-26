import dayjs from "dayjs";
import { MenuUrlReference } from "./sharedEnums";

export const buildURL = (baseURL: string, params: any)=> {
    const queryString = Object.keys(params)
      .map(key => {
        if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        } else {
          return '';
        }
      })
      .filter(Boolean)
      .join('&');
  
    return baseURL + '?' + queryString;
  }

export const getMenuLink = (id: string) =>{
  switch(id){
    case 'core-stock':
      return MenuUrlReference.CORE_STOCK;
    case 'alpha-intelligence':
      return MenuUrlReference.ALPHA_INTELLIGENCE;
    default:
      return '/';
  }
}
export const formatDate = (data: any) =>
  dayjs(data).format("dddd, MMMM D, YYYY h:mm A");