import axios from "axios";
import alphavantage from "alphavantage";
import { SeriesFunction } from "../utils/enums";
import { CoreStock } from "../utils/coreStock.interface";

class CoreStockService {
  alpha: any;

  constructor() {
    this.alpha = alphavantage({ key: "RIBXT3XYLI69PC0Q" });
  }

  getInfoByFunction(func: string, data: CoreStock): Promise<any> {
    switch (func) {
      case SeriesFunction.INTRADAY:
        return this.intraDay(data);
      case SeriesFunction.TIME_SERIES_DAILY:
        return this.daily('symbol');
      case SeriesFunction.TIME_SERIES_DAILY_ADJUSTED:
        return this.dailyAdjusted('symbol');
      default:
        return this.intraDay(data);
    }
  }

  intraDay(data: CoreStock): Promise<any> {
    //retur n this.alpha.data.intraday(data.symbol, data.outputsize,'json', data.interval);
    return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`)
  }

  daily(symbol: string): Promise<any> {
    alert('daily')
    //return this.alpha.data.daily(symbol);
    return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
  }

  dailyAdjusted(symbol: string): Promise<any> {
    return this.alpha.data.daily_adjusted(symbol);
  }

  weekly(symbol: string): Promise<any> {
    return this.alpha.data.weekly(symbol);
  }

  weeklyAdjusted(symbol: string): Promise<any> {
    return this.alpha.data.weekly_adjusted(symbol);
  }

  monthly(symbol: string): Promise<any> {
    return this.alpha.data.monthly(symbol);
  }

  monthlyAdjusted(symbol: string): Promise<any> {
    return this.alpha.data.monthly_adjusted(symbol);
  }
}

export default CoreStockService;
