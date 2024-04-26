import axios from "axios";
import alphavantage from "alphavantage";
import {buildURL} from "../utils/generalFunctions";
import {BASEURL} from "../utils/constants";
const API_KEY = "RIBXT3XYLI69PC0Q";
class AlphaVantageService {
  getInfo(params: any) {
    const url = buildURL(BASEURL, params);
    console.log(url)
    return axios.get(url);  
    //return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
  }
}

export default AlphaVantageService;
