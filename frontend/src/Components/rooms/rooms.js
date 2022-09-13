import { Button, Col, message, Popconfirm, Row, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { React, useState } from "react";
import Cards from "../utilities/card";

const data = [
  { name: "Total Rooms", count: 12 },
  { name: "Availabel Singel Rooms", count: 4 },
  { name: "Availabel Double Rooms", count: 6 },
];
const Rooms = () => {
  const [loading, setloading] = useState(false);
  const proceed = ()=>{
      return new Promise((resolve) => {
        setTimeout(() => resolve( message.success("deleted sucessfully",3)), 3000);
       
      })
      
}
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      phone: 1234567890,
      check_in: "12-01-2000",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      phone: 1234567890,
      check_in: "12-01-2000",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Check In",
      dataIndex: "check_in",
      key: "checkin",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Popconfirm
          okText="Yes"
          title="Are You Sure You Want to Checkout and Delete"
          cancelText="No"
          onCancel={() => {}}
          onConfirm={proceed}
          showCancel
        ><Button><DeleteOutlined/></Button></Popconfirm>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <Row gutter={16} justify="space-around" align="center">
        {data.map((data) => {
          return (
            <Col xs={24} md={12} xl={8} lg={6}>
              <Cards data={data}></Cards>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col span={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            loading={loading}
            scroll={true}
          ></Table>
        </Col>
      </Row>
    </>
  );
};

export default Rooms;
