import { Input, Button, Card, Space } from "antd";
import { useEffect, useState } from "react";
import { getAlphaFunctionByUrlParam } from "../utils/UtilFunctions";
import AlphaVantageService from "../../../shared/services/alpha-vantage.service";

const AlphaIntelligenceForm = ({ setStockData, alphaFunction }: any) => {
  const alphaService = new AlphaVantageService();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    tickers: "",
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
        //setStockData(response.data)
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTimeStockData = async () => {
    console.log(getAlphaFunctionByUrlParam(alphaFunction))
    const requestData = {
      ...formData,
      function: getAlphaFunctionByUrlParam(alphaFunction),
      apikey: "RIBXT3XYLI69PC0Q",
    }
    return await alphaService.getInfo(requestData);
  };

  useEffect(() => {
    setFormData({
      tickers: "",
    });
  }, [alphaFunction]);

  return (
    <Space direction="vertical" size={16}>
      <Card title="search what you need!" style={{ width: 300 }}>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <form onSubmit={(e: any) => submitForm(e)}>
              <h2 className="text-lg font-semibold mb-4">Search for Alpha Intelligence Info</h2>
              <div className="mb-4">
                <label>Tickers</label>
                <Input
                  placeholder="tickers"
                  aria-label="symbol to search"
                  required={true}
                  id="tickers"
                  onChange={onMutate}
                  value={formData.tickers}
                />
              </div>
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

export default AlphaIntelligenceForm;
