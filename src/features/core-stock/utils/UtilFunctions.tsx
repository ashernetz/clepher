import dayjs from "dayjs";
import { SeriesFunction, TimeSeriesByUrlParam, Titles } from "./enums";
export const getTimeSeriesData = (timeSeries: any) => {
  const timeSeriesData: any = {
    labels: [],
    Data: [],
  };
  Object.keys(timeSeries).map((key: any) => {
    timeSeriesData.labels.push(key);
    timeSeriesData.Data.push({ ...timeSeries[key], date: key });
  });
  return timeSeriesData;
};

export const getTimeStockTitle = (title: string) => {
  switch (title) {
    case Titles.intraday:
      return "Intraday";
    case Titles.daily:
      return "Daily";
    case Titles["daily-adjusted"]:
      return "Daily Adjusted";
    case Titles.weekly:
      return "Weekly";
    case Titles["weekly-adjusted"]:
      return "Weekly Adjusted";
    case Titles.monthly:
      return "Monthly";
    case Titles["monthly-adjusted"]:
      return "Monthly Adjusted";
    default:
      return "Intraday";
  }
};

export const getTimeSeriesByUrlParam = (title: string) => {
  switch (title) {
    case SeriesFunction.INTRADAY:
      return TimeSeriesByUrlParam.intraday;
    case SeriesFunction.TIME_SERIES_DAILY:
      return TimeSeriesByUrlParam.daily;
    case SeriesFunction.TIME_SERIES_DAILY_ADJUSTED:
      return TimeSeriesByUrlParam["daily-adjusted"];
    case SeriesFunction.TIME_SERIES_WEEKLY:
      return TimeSeriesByUrlParam.weekly;
    case SeriesFunction.TIME_SERIES_WEEKLY_ADJUSTED:
      return TimeSeriesByUrlParam["weekly-adjusted"];
    case SeriesFunction.TIME_SERIES_MONTHLY:
      return TimeSeriesByUrlParam.monthly;
    case SeriesFunction.TIME_SERIES_MONTHLY_ADJUSTED:
      return TimeSeriesByUrlParam["monthly-adjusted"];
    default:
      return TimeSeriesByUrlParam.intraday;
  }
};
