import { Card, Col, Divider } from "antd";
import AlphaIntelligenceForm from "../components/AlphaIntelligenceForm";
import { useParams } from "react-router-dom";
import { useState } from "react";

const AlphaIntelligence = () => {
  const [stockData, setStockData] = useState<any>([]);
  let { alphaFunction } = useParams();
  console.log(alphaFunction);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Alpha Intelligence
      </h1>
      <div className="flex items-center flex-row w-100 justify-center">
        <Col span={8} className="">
          <Card>
            <p className="font-medium">
              advanced market intelligence built with our decades of expertise
              in AI, machine learning, and quantitative finance. We hope these
              highly differentiated alternative datasets can help turbocharge
              your trading strategy, market research, and financial software
              application to the next level.
            </p>
          </Card>
        </Col>
      </div>
      <Divider />
      <div className="w-100 flex justify-center items-center flex-column">
            <AlphaIntelligenceForm alphaFunction ={alphaFunction} setStockData={setStockData}/>
        </div>
    </div>
  );
};

export default AlphaIntelligence;
