import type { FormProps } from "antd";
import { Select, Input, Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { getTimeSeriesByUrlParam } from "../utils/UtilFunctions";
import { buildURL } from "../../../shared/utils/generalFunctions";
import AlphaVantageService from "../../../shared/services/alpha-vantage.service";
const { Option } = Select;

const CoreStockForm = ({ setStockData, timeSeries }: any) => {
  const alphaService = new AlphaVantageService();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    symbol: "",
    outputsize: "compact",
    interval: "60min",
  });

  const onMutate = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        const response = await getTimeStockData();
        setStockData(response.data)
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTimeStockData = async () => {
    const requestData = {
      ...formData,
      function: getTimeSeriesByUrlParam(timeSeries),
      apikey: "RIBXT3XYLI69PC0Q",
    }
    return await alphaService.getInfo(requestData);
  };

  useEffect(() => {
    setFormData({
      symbol: "",
      outputsize: "compact",
      interval: "60min",
    });
  }, [timeSeries]);

  return (
    <Space direction="vertical" size={16}>
      <Card title="search what you need!" style={{ width: 300 }}>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <form onSubmit={(e: any) => submitForm(e)}>
              <h2 className="text-lg font-semibold mb-4">Search the stocks you want</h2>
              <div className="mb-4">
                <label>Symbol</label>
                <Input
                  placeholder="Symbol"
                  aria-label="symbol to search"
                  required={true}
                  id="symbol"
                  onChange={onMutate}
                  value={formData.symbol}
                />
              </div>
              <div className="mb-4">
                <label>Output Size</label> <br />
                <Select
                  placeholder="Select an output size"
                  defaultValue="compact"
                  onChange={(e: string) => {
                    const data = {
                      target: {
                        id: "outputsize",
                        value: e,
                      },
                    };
                    onMutate(data);
                  }}
                >
                  <Option value="compact">compact</Option>
                  <Option value="full">full</Option>
                </Select>
              </div>
              {
                timeSeries === "intraday" && (
                  <div className="mb-4">
                    <label>Interval</label> <br />
                    <Select
                      placeholder="Select an interval"
                      defaultValue="60min"
                      onChange={(e: string) => {
                        const data = {
                          target: {
                            id: "interval",
                            value: e,
                          },
                        };
                        onMutate(data);
                      }}
                    >
                      <Option value="1min">1min</Option>
                      <Option value="5min">5min</Option>
                      <Option value="15min">15min</Option>
                      <Option value="30min">30min</Option>
                      <Option value="60min">60min</Option>
                    </Select>
                  </div>
                )
              }
              <div className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </Space>
  );
};

export default CoreStockForm;
