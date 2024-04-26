import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { formatDate } from "../../../shared/utils/generalFunctions"; 
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => <a>{formatDate(date)}</a>,
  },
  {
    title: "1. Open",
    dataIndex: "1. open",
    key: "1. open",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "2. High",
    dataIndex: "2. high",
    key: "2. high",
  },
  {
    title: "4. close",
    dataIndex: "4. close",
    key: "4. close",
  },
  {
    title: "5. volume",
    dataIndex: "5. volume",
    key: "5. volume",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const TableData = ({ tableData }: any) => {
  return (
    <div className="w-100 align-center mt-6">
      <Table columns={columns} dataSource={tableData.Data} />
    </div>
  );
};

export default TableData;
