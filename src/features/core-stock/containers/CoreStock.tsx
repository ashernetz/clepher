import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Card, Divider } from "antd";
import CoreStockForm from "../components/CoreStockForm";
import CoreStockInfo from "../components/coreStockInfo";
import { getTimeSeriesData, getTimeStockTitle } from "../utils/UtilFunctions";
import TableData from "../components/TableData";

const CoreStock = () => {
  let { timeSeries } = useParams();
  const [seriesOption, setSeriesOption] = useState<string>("");
  const [stockData, setStockData] = useState<any>({});

  const renderInfo = () => {
    const timeSeriesKey = Object.keys(stockData).filter((key) =>
      key.includes("Time Series")
    );
    const timeSeriesData = getTimeSeriesData(stockData[timeSeriesKey[0]]);
    console.log(timeSeriesData);
    return (
      <div className="w-100 flex justify-center flex-col">
        <CoreStockInfo
          data={stockData["Meta Data"]}
          timeSeriesData={timeSeriesData}
        />
        <TableData tableData={timeSeriesData} />
      </div>
    );
  };

  const renderTitle = () => {
    return (
      <h1 className="text-2xl font-bold text-center my-8">
        Time series: {getTimeStockTitle(seriesOption)}
      </h1>
    );
  };

  useEffect(() => {
    if (timeSeries) {
      setSeriesOption(timeSeries);
      setStockData({});
    }
  }, [timeSeries]);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Time Series Stock Data
      </h1>
      <div className="flex items-center flex-row w-100 justify-center">
        <Col span={8} className="">
          <Card>
            <p className="font-medium">
              current and 20+ years of historical intraday OHLCV time series of
              the equity specified, covering extended trading hours where
              applicable (e.g., 4:00am to 8:00pm Eastern Time for the US
              market). You can query both raw (as-traded) and
              split/dividend-adjusted intraday data from this endpoint. The
              OHLCV data is sometimes called "candles" in finance literature.
            </p>
          </Card>
        </Col>
      </div>
      <Divider />
      {timeSeries && renderTitle()}
      <div className="w-100 flex justify-center">
        <CoreStockForm setStockData={setStockData} timeSeries={timeSeries} />
      </div>
      <Divider />
      {Object.keys(stockData).length > 0 && renderInfo()}
    </div>
  );
};

export default CoreStock;
