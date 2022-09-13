import { React, useState } from "react";
import { Form, Input, Button, Card, Row, Col, Upload } from "antd";
import {
  HomeTwoTone,
  FileAddTwoTone,
  PushpinTwoTone,
} from "@ant-design/icons";
import "../Home/admin.css";
const AddAppartment = () => {
  const [loading, setloading] = useState(false);
  const [fileList, setfileList] = useState([]);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleUpload = ({ fileList }) => {
    console.log("fileList", fileList);
    setfileList(fileList);
  };
  const cardstyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <Row style={{ marginTop: "6rem" }} justify="center">
        <Col lg={16} xs={24}>
          <Card
            className="d-flex flex-column justify-content-center"
            title={"Add Apartment"}
            style={cardstyle}
            justify={"center"}
          >
            <Form
              name="normal_login"
              className="apartment-form"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="apartment-name"
                label="Apartment Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Apartment Name!",
                  },
                ]}
              >
                <Input
                  suffix={<HomeTwoTone className="site-form-item-icon" />}
                  placeholder="Apartment Name"
                />
              </Form.Item>
              <Form.Item
                name="single-room"
                rules={[
                  {
                    required: true,
                    message: "Please Enter single Rooms",
                  },
                ]}
                label="Single Rooms"
              >
                <Input
                  suffix={<FileAddTwoTone className="site-form-item-icon" />}
                  type="text"
                  placeholder="Ex: 101,102,103"
                />
              </Form.Item>
              <Form.Item
                name="double-room"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Double Rooms",
                  },
                ]}
                label="Double Rooms"
              >
                <Input
                  suffix={<FileAddTwoTone className="site-form-item-icon" />}
                  type="text"
                  placeholder="Ex: 101,102,103"
                />
              </Form.Item>
              <Form.Item
                name="location"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Location",
                  },
                ]}
                label="Location"
              >
                <Input
                  suffix={<PushpinTwoTone className="site-form-item-icon" />}
                  type="text"
                  placeholder="Please Enter Location Link of the Apartment "
                />
              </Form.Item>
              <Form.Item
                name="location-text"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Location",
                  },
                ]}
                label="Location Subtext"
              >
                <Input
                  //suffix={<LockOutlined className="site-form-item-icon" />}
                  type="link"
                  placeholder="Little sub-text About Location"
                />
              </Form.Item>
              <Form.Item
              name="image"
              label="Upload Image"
              rules={[{
                required:true,
                message:"Please Upload Image"
              }]}
              >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleUpload}
                beforeUpload={() => false}
                // return false so that antd doesn't upload the picture right away
              >
                <Button>Add</Button>
              </Upload>
              </Form.Item>
              
              <div className="d-flex justify-content-center">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Add Apartment
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddAppartment;
