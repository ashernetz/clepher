import { Card } from "antd";
import { StockInformationKeys } from "../utils/enums";

const CoreStockInfo = ({data, timeSeriesData}:any) => {
  return (
    <div>
        <Card title="Información de Acciones" className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-gray-600 font-semibold">Information:</h4>
          <p>{data[StockInformationKeys.INFORMATION]}</p>
        </div>
        <div>
          <h4 className="text-gray-600 font-semibold">Symbol:</h4>
          <p>{data[StockInformationKeys.SYMBOL]}</p>
        </div>
        <div>
          <h4 className="text-gray-600 font-semibold">Last Refreshed:</h4>
          <p>{data[StockInformationKeys.LAST_REFRESHED]}</p>
        </div>
        <div>
          <h4 className="text-gray-600 font-semibold">Interval:</h4>
          <p>{data[StockInformationKeys.INTERVAL]}</p>
        </div>
        <div>
          <h4 className="text-gray-600 font-semibold">Output Size:</h4>
          <p>{data[StockInformationKeys.OUTPUT_SIZE]}</p>
        </div>
        <div>
          <h4 className="text-gray-600 font-semibold">Time Zone:</h4>
          <p>{data[StockInformationKeys.TIME_ZONE]}</p>
        </div>
      </div>
    </Card>
    </div>
  );
};
export default CoreStockInfo;
