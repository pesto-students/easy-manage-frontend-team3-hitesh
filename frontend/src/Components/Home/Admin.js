import { Col, Row, Space } from "antd";
import Card from "antd/lib/card/Card";
import { React, useState } from "react";
import './admin.css'
import {ReactComponent as location} from "../custom-icons/location-pin-svgrepo-com.svg"
import Icon from '@ant-design/icons';
import { Outlet } from "react-router-dom";
const Admin = () => {

  const [loading, setloading] = useState(false);
  const array = [
    "sai enclave",
    "Deccan Abode ",
    "Fresh Living",
    "Hacson Villas",
  ];
  return (
    <>
      <Row gutter={24} style={{ marginTop: "6rem" }} justify="center" className="w-100">
        <Col  md={16} xs={24}>
          {array.map((arr, index) => {
            return (
              <Card
                loading={loading}
                className=""
                key={index}
              >
              <Row gutter={12}>
                <Col xs={10} xl={8}>
                    <img className=" card-img" alt="img" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?cs=srgb&dl=pexels-expect-best-323705.jpg&fm=jpg" ></img>
                </Col>
                <Col xs={14} xl={16}>
                  <h2>{arr}</h2>
                  <h4>Total Rooms:23</h4>
                  <h4>Availabel Rooms:3</h4>
                    <Space>
                      <a href="#r"><Icon component={location} style={{color:"black"}}></Icon></a>
                    </Space>
                </Col>
              </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
      {/* <Row>
        <Col span={24}>
          <Outlet></Outlet>
        </Col>
      </Row> */}
    </>
  );
};

export default Admin;
