import {
  SeriesFunction,
  TimeSeriesByUrlParam,
} from "../../core-stock/utils/enums";
import { AlphaSeriesFunction, AlphaTimeSeriesByUrlParam } from "./AlphaEnums";

export const getAlphaFunctionByUrlParam = (alphaFunction: string) => {
  switch (alphaFunction) {
    case AlphaSeriesFunction.NEWS_SENTIMENT:
      return AlphaTimeSeriesByUrlParam["news-sentiment"];

    case AlphaSeriesFunction.TOP_GAINERS_LOSERS:
      return AlphaTimeSeriesByUrlParam["top-gainers-losers"];
  }
};

export const getAlphaIntelligenceTitle = (title: string) => {};
