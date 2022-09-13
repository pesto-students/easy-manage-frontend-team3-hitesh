import { Button, Col, Row, Space,Pagination ,Input } from "antd";
import Card from "antd/lib/card/Card";
import { React, useState ,} from "react";
//import './admin.css'
import {ReactComponent as location} from "../custom-icons/location-pin-svgrepo-com.svg"
import Icon from '@ant-design/icons';

import { useNavigate } from "react-router-dom";


const Admin = () => {
  const {Search} = Input;
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  const showTotal = (total) => `Total ${total} items`;
  const array = [
    "Sai enclave",
    "Deccan Abode ",
    "Fresh Living",
    "Hacson Villas",
  ];
  const cardStyle = {
    height:"auto",
    width:"300px"
  }
  const pageChange=(e)=>{
    
  }
  const onSearch = (e) => console.log(e.target.value);
  const changeRoute = (e,arr)=>{
      navigate(`/home/admin/appartment/${arr}`)
  }
  
  return (
    <>
      <Row gutter={0}  className="w-100 ml-3">
        <Col span={24} className="d-flex justify-content-end my-3 px-4">
        <Search
      placeholder="input search text"
      enterButton
      allowClear
      onChange={onSearch}
      style={{
        width: "auto",
      }}
      size="large"
    />
        </Col>
          {array.map((arr, index) => {
            return (
              <Col  md={12} lg={8} xl={6}  xs={24} className=" d-flex justify-content-center">
              <Card
                loading={loading}
                className=" d-flex flex-column apartment"
                key={index}
                cover={<img alt="img" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?cs=srgb&dl=pexels-expect-best-323705.jpg&fm=jpg" ></img>}
                style={cardStyle}
                hoverable
              >
              <Row gutter={12}>
                <Col xs={24} xl={24} key={arr}>
                  <h2 className="text-wrap">{arr}</h2>
                  <h4>Total Rooms:23</h4>
                  <h4>Availabel Rooms:3</h4>
                    <Space size={80}>
                      <div>
                      <a href="#r"><Icon component={location} style={{color:"black"}}></Icon></a>
                      <span>Hitech City</span>
                      </div>
                      <Button value={arr} onClick={(e)=>changeRoute(e,arr)}>Show</Button>
                    </Space>
                </Col>
              </Row>
              </Card>
              </Col>
            );
          })}
        <Col span={24} className="d-flex justify-content-end my-3">
        <Pagination size="small" total={50} showTotal={showTotal} responsive onChange={pageChange} />
        </Col>
      </Row>
    </>
  );
};

export default Admin;
